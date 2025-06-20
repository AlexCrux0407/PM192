/* Zona 1 Importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, Image, Switch } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

/* Zona 2 Main */
export default function App() {
  const [activarSwitch, setActivarSwitch] = useState(false);
  const [modoOscuro, setModoOscuro] = useState(false);
  const [botonDesactivado, setBotonDesactivado] = useState(false);
  const [contador, setContador] = useState(0);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={[styles.contenedorPrincipal, modoOscuro && styles.fondoOscuro]}>
        <Text style={[styles.titulo, modoOscuro && styles.textoClaro]}>
          Práctica con Switch
        </Text>

        <View style={styles.opcion}>
          <Text style={[styles.etiqueta, modoOscuro && styles.textoClaro]}>
            Activar switch 2
          </Text>
          <Switch
            value={activarSwitch}
            onValueChange={setActivarSwitch}
            trackColor={{ false: '#ccc', true: '#4caf50' }}
            thumbColor={activarSwitch ? '#ffffff' : '#999999'}
          />
        </View>

        <View style={styles.opcion}>
          <Text style={[styles.etiqueta, modoOscuro && styles.textoClaro]}>
            Modo Oscuro
          </Text>
          <Switch
            value={modoOscuro}
            onValueChange={setModoOscuro}
            disabled={!activarSwitch}
            trackColor={
              activarSwitch
                ? { false: '#ff9999', true: '#ff3b30' }
                : { false: '#ccc', true: '#4caf50' }
            }
            thumbColor={
              !activarSwitch
                ? '#ff3b30'
                : modoOscuro
                  ? '#ffffff'
                  : '#999999'
            }
          />
        </View>

        <View>
          <Button
            title="Presioname"
            color="#841584"
            onPress={() => Alert.alert('Me presionaste =P')}
          />
        </View>

        <View style={{ marginTop: 20 }}>
          <Button
            title={botonDesactivado ? "Desactivado" : "Desactívame"}
            disabled={botonDesactivado}
            onPress={() => setBotonDesactivado(true)}
          />
        </View>

        <View style={styles.botonJustificado}>
          <Button
            title="Left button"
            color="#674323"
            onPress={() => Alert.alert("Left Button", "Has presionado el botón izquierdo")}
          />
          <Button
            title="Right button"
            color="#097865"
            onPress={() => Alert.alert("Right Button", "Has presionado el botón derecho")}
          />
        </View>

        <TouchableOpacity
          style={styles.dynamicButton}
          onPress={() => setContador(contador + 1)}
        >
          <Text style={styles.dynamicText}>{contador}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => Alert.alert("La pokebola ha sido presionada")}
        >
          <Image
            source={require('./assets/pokebola.png')}
            style={styles.imagen}
          />
        </TouchableOpacity>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

// Zona 3 Estilos
const styles = StyleSheet.create({
  contenedorPrincipal: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    justifyContent: 'center',
  },
  fondoOscuro: {
    backgroundColor: '#1a1a1a',
  },
  titulo: {
    fontSize: 24,
    marginBottom: 40,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textoClaro: {
    color: '#ffffff',
  },
  opcion: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
    alignItems: 'center',
  },
  etiqueta: {
    fontSize: 18,
  },
  botonJustificado: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  dynamicButton: {
    padding: 10,
    marginTop: 10,
    backgroundColor: '#987867',
    borderRadius: 5,
    alignItems: 'center',
  },
  dynamicText: {
    color: '#345676',
    fontSize: 18,
  },
  imagen: {
    width: 100,
    height: 100,
    marginTop: 20,
    alignSelf: 'center',
  },
});