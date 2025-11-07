import { StyleSheet, Text, View, ImageBackground } from 'react-native';

const BackgroundImage = require('../assets/icon.png')
export default function App() {
  return (
    <ImageBackground 
    source={BackgroundImage} 
    style ={styles.background}
    resizeMode="cover">
    
    <View style={styles.container}>
      <Text style={styles.titulo}>Restaurante NuevaEsperanza</Text>
      <Text> </Text>
      <Text style={styles.descipcion}>Bievenido al restaurante NuevaEsperanza, donde tus platillos preferidos se encuentran</Text>
      <Text>Menu</Text>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  descipcion: {
    fontSize: 20,
    marginBottom: 20,
  },
});
