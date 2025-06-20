/* Zona 1 Importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, Image, TextInput } from 'react-native';
import React, { useState } from 'react';


const Texto = ({ style }) => {
  const [contenido, setContenido] = useState('Hola Mundo');
  const actualizarTexto = () => {
    setContenido('Estado actualizado');
  }

  return (
    <Text style={[styles.text, style]} onPress={actualizarTexto}>{contenido}</Text>
  );
}

/* Zona 2 Main */
export default function App() {
  const [nombre, setNombre] = useState('');
  
  const mostrarAlerta = () => {
    if (nombre.trim() === '') {
      Alert.alert('Error', 'Por favor escribe algo');
    } else {
      Alert.alert('Bienvenido', `Hola ${nombre}, bienvenido a nuestra app :p`);
    }
  }

  return (
    <View style={styles.container}>
      <Texto />
      <Text style={styles.text}>Ingrese su nombre:</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe tu nombre"
        value={nombre}
        onChangeText={setNombre}
      />
      <Button title="Enviar" onPress={mostrarAlerta} />
    </View>
  );
}

// Zona 3 Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
    color: 'black',
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#f0f0f0',
    color: 'black',
    width: '100%',
  },
});
