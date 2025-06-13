/* Zona 1 Importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React,{useState} from 'react';

const Texto =({style})=> {
  const [contenido, setContenido] = useState("Hola Mundo")
  const actualizarTexto = () => {setContenido("Estado actualizado")};
  return (
      <Text style={[styles.text, style]} onPress={actualizarTexto}>{contenido}</Text>
  )
}
/* Zona 2 Main */
export default function App() {
  return (

    <View style={styles.container}>

      <Texto style={styles.red}> </Texto>
      
      <Texto style={styles.green}> </Texto>
      
      <Texto style={styles.blue}> </Texto>
      <StatusBar style="auto" />

    </View>
  );
}
// Zona 3 Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'baseline',
    justifyContent: 'center',
    flexDirection: "column",
  },
  text: {
    color:"white",
    fontSize:25,

  },
  red: {
    backgroundColor: "red",
  },
  green: {
    backgroundColor: "green",
  },
  blue: {
    backgroundColor: "blue",
  },
});
