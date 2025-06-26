//pagina de registro de usuario
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Switch, TouchableOpacity, Alert, ImageBackground, SafeAreaView } from 'react-native';

const FondoBienvenida = () => {
  return (
    <ImageBackground
      source={require('./assets/fondoc.jpg')}
      style={styles.fondo}
    >
      <View style={styles.contenido}>
        <Text style={styles.titulo}>Este es el Splash Screen</Text>
      </View>
    </ImageBackground>
  );
};

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [aceptaTerminos, setAceptaTerminos] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);  // Ocultar splash después de 5 segundos
    }, 5000);

    return () => clearTimeout(timer); // Limpiar timer al desmontar
  }, []);

  const mostrarAlerta = () => {
    if (!aceptaTerminos) {
      Alert.alert('Error', 'Debes aceptar los términos y condiciones');
      return;
    }
    if (nombre.trim() === '', correo.trim() === '') {
      Alert.alert('Error', 'Por favor completa todos los campos');
    } else {
      Alert.alert("Registro exitoso", `Nombre: ${nombre}, Correo: ${correo}`);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {showSplash ? (
        <FondoBienvenida />
      ) : (
        <ImageBackground source={require('./assets/fondo.png')} style={styles.fondo}>
          <View style={styles.container}>
            <Text style={styles.titulo}>Registro de Usuario</Text>
            
            <View style={styles.formContainer}>
              <TextInput placeholder="Nombre completo" placeholderTextColor="#666" style={styles.input} value={nombre} onChangeText={setNombre}/>
              <TextInput placeholder="Correo electrónico" placeholderTextColor="#666" style={styles.input} value={correo} onChangeText={setCorreo}/>
              <View style={styles.switchContainer}>
                <Switch 
                  value={aceptaTerminos} 
                  onValueChange={setAceptaTerminos} 
                  trackColor={{ false: "#767577", true: "#81b0ff" }} 
                  thumbColor={aceptaTerminos ? "#f5dd4b" : "#f4f3f4"}
                />
                <Text style={styles.switchText}>Aceptar términos y condiciones</Text>
              </View>
              
              <TouchableOpacity style={styles.button} onPress={mostrarAlerta}>
                <Text style={styles.buttonText}>Registrarse</Text>
              </TouchableOpacity>
            </View>
            
            <StatusBar style="light" />
          </View>
        </ImageBackground>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  fondo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  contenido: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 15,
    padding: 20,
    width: '85%',
    alignItems: 'center',
    justifyContent: 'center',
    },  
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  formContainer: {
    width: '100%',
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingLeft: 15,
    fontSize: 16,
    color: '#333',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',

  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  switchText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#4A90E2',
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
