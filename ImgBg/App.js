import { StatusBar } from 'expo-status-bar';
import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native';

const FondoBienvenida = () => {
  return(
    <ImageBackground
      source={require('./assets/fondo.jpg')} style={styles.fondo}>
      <View style={styles.contenido}>
        <Text style={styles.titulo}>Bienvenido a mi app</Text>
      </View>
    </ImageBackground>
  )
};

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FondoBienvenida />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  fondo:{
    flex: 1
  },
  contenido: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  titulo: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',

  }
});
