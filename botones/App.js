/* Zona 1 Importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button,Alert,TouchableOpacity, Image } from 'react-native';
import React,{useState} from 'react';


/* Zona 2 Main */
export default function App() {
  return (

    <View>
      <Button
      title="Presioname">
      color="#165874"
      onPress={() => Alert.alert('Has presionado el botón')}
      </Button>
      <View style={styles.contenedor}>
      <Button
        title="Izquierda">
        color="#165874"
        onPress={() => Alert.alert('Has presionado el botón')}
      </Button>
      <Button
        title="Izquierda">
        color="#165874"
        onPress={() => Alert.alert('Has presionado el botón')}
      </Button>
      </View>

    </View>
  );
}
// Zona 3 Estilos
const styles = StyleSheet.create({
  contenedor: {
    flexDirection: row,
    justifyContent: 'space-between',
  },
  Boton: {
    marginTop: 10,
    alignItems: 'center',
    backgroundColor: '#165874',
  },
  TextoBoton: {
    color: '#123454',
    fontSize: 18,
  },
  Imagen: {
    width: 100,
    height: 100,
  },
});
