import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ActivityIndicator, StatusBar } from 'react-native';
const IndicadorCarga = ({color, size}) => {
  return <ActivityIndicator color={color} size={size} style={styles.indicador} />;
}

export default function App() {
  const [cargando, setCargando] = useState(false);
  const iniciarCarga = () => {
    setCargando(true);
    setTimeout(() => {
      setCargando(false);
    }, 3000);   
  };
  return (
    <View style={styles.container}>
      <Text style={styles.textoPrincipal}>Uso de ActivityIndicator</Text>
      <StatusBar barStyle="auto" />

      <Button title="Iniciar Carga" onPress={iniciarCarga} />
      {cargando ? (
         <IndicadorCarga color="#0066cc" 
         size="large" />
      ) : (
        <Text style={styles.textoSecundario}> Presiona el botón para comenzar</Text>
      )}
      
    </View>
  );
  
}

const styles = StyleSheet.create({
  // Contenedor principal de la aplicación
  container: {
    flex: 1,
    backgroundColor: '#ccff90',
    padding: 20, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoPrincipal: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2e2e2e',
    marginBottom: 30,
  },
  textoSecundario: {
    fontSize: 16,
    marginVertical: 20,
    color: '#3a3a3a',
  },
  indicador: {
    marginTop: 20,
    transform: [{ scale: 1.5 }], // Hace el indicador más visible
  },


});