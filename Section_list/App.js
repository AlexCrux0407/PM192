import React, { useState } from 'react';
import { StyleSheet, Text, View, SectionList, StatusBar } from 'react-native'; 
import ItemDeSeccion from './ItemDeSeccion'; 

export default function App() {
  const [datosSeccionados, setDatosSeccionados] = useState([
    {
      title: 'Mensajes Destacados',
      data: [
        { id: '1', nombre: 'Ana', mensaje: '¡Hola!' },
        { id: '2', nombre: 'Juan', mensaje: 'Salinas mató a Colosio.' },
      ],
    },
    {
      title: 'Mis Recordatorios',
      data: [
        { id: '3', nombre: 'Yo', mensaje: 'Comprar comida para la semana.' },
        { id: '4', nombre: 'Yo', mensaje: 'Revisar el clima.' },
        { id: '5', nombre: 'Yo', mensaje: 'Preocuparme por las tareas pendientes.' },
      ],
    },
    {
      title: 'Ideas para Proyectos',
      data: [
        { id: '6', nombre: 'Recetas', mensaje: 'App de recetas personalizadas.' },
        { id: '7', nombre: 'Copia de notion', mensaje: 'Un rastreador de hábitos diario.' },
      ],
    },
  ]);

  
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" /> 
      <Text style={styles.titulo}>Section List</Text>

      <SectionList
        sections={datosSeccionados} 
        keyExtractor={(item, index) => item.id + index} 
        renderItem={({ item }) => (
          <ItemDeSeccion nombre={item.nombre} mensaje={item.mensaje} />
        )}
        renderSectionHeader={({ section: { title } }) => (

          <Text style={styles.sectionHeader}>{title}</Text>
        )}

        style={styles.sectionList}
        contentContainerStyle={styles.sectionListContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingTop: 50, 
    alignItems: 'center', 
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  sectionList: {
    width: '100%', 
  },
  sectionListContent: {
    paddingBottom: 20, 
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#e0e0e0', 
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginTop: 15, 
    color: '#222',
  },
});