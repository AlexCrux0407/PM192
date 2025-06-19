import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View,Switch } from "react-native";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import { useState } from "react";

export default function App() {
  const [activarSwitch, setActSwitch] = useState(false);
  const[modoOscuro,SetModoOscuro] = useState(false);
  return(
    <SafeAreaProvider>
      <SafeAreaView style={[styles.contenedor,modoOscuro && styles.fondoOscuro]}>
        {/* Componentes */}
          <Text style={[styles.titulo,modoOscuro && styles.textoClaro]}>
            Práctica con switchs
          </Text>
        <View style={styles.opcion}>
          <Text style={[styles.etiqueta,modoOscuro && styles.textoClaro]}>
            Activar switch  
          </Text>
          <Switch
            value={activarSwitch}
            onValueChange={setActSwitch}
            trackColor={{ false: "#ccc", true: "#4caf50" }}
            thumbColor={activarSwitch ? "#ffffff" : "#999999"}
          />
        </View>
        <View style={styles.opcion}>
          <Text style={[styles.etiqueta,modoOscuro && styles.textoClaro]}>
            Modo oscuro
          </Text>
          <Switch
            value={modoOscuro}
            onValueChange={SetModoOscuro}
            disabled={!activarSwitch}
            trackColor={
              !activarSwitch ?
              { false: "#ff9999", true: "#ff3b30" }
            :
              { false: "#ccc", true: "#4caf50" }
            }
            thumbColor={
              !activarSwitch
              ?  "#ff3b" 
              :modoOscuro
              ? "#ffffff"
              : "#999999"
            }>
          </Switch>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  contenedor: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 30,
    justifyContent: "center",
  },
  titulo: {
    fontSize: 24,
    marginBottom: 40,
    textAlign: "center",
    fontWeight: "bold"
  },
  fondoOscuro: {
    backgroundColor: "#1a1a1a",
  },
  textoClaro: {
    color: "#ffffff",
  },
  opcion: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  etiqueta: {
    fontSize: 18,
  },

});