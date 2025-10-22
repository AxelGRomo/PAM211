// 1. Zona importaciones
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import BotonesScreen from './BotonesScreen';
import ContadorScreen from './ContadorScreen';
import ScrollViewScreen from './ScrollViewScreen';
import TextimputScreen from './TextimputScreen';
import PasswordScreen from './PasswordScreen';
import ImageBackgroundScreen from './ImageBackgroundScreen';
// import ActivityIndicatorScreen from './ActivityIndicatorScreen';
// import FlatListScreen from './FlatListScreen';
// import ModalScreen from './ModalScreen';

// 2. Zona de main o componentes
export default function MenuScreen() {
  const [screen, setScreen] = useState('menu');

  switch (screen) {
    case 'contador':
      return <ContadorScreen />;
    case 'botones':
      return <BotonesScreen />;
    case 'image':
      return <ImageBackgroundScreen />;
    case 'scrollview':
      return <ScrollViewScreen />;
    case 'password':
      return <PasswordScreen />;
    case 'textimput':
      return <TextimputScreen />;
    case 'ActivityIndicator':
      return <ActivityIndicatorScreen />;
    case 'FlatList':
      return <FlatListScreen />;
    case 'Modal':
      return <ModalScreen />;
    case 'menu':
    default:
      return (
        <View style={styles.container}>
          
          <Text style={styles.titulo}>Menú de Prácticas</Text>

          <View style={styles.botonesContainer}>
            <TouchableOpacity
              style={[styles.boton, { backgroundColor: '#cf1c1cff' }]}
              onPress={() => setScreen('contador')}
            >
              <Text style={styles.textoBoton}>Contador</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.boton, { backgroundColor: '#dd961dff' }]}
              onPress={() => setScreen('botones')}
            >
              <Text style={styles.textoBoton}>Botones</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.boton, { backgroundColor: '#006195ff' }]}
              onPress={() => setScreen('image')}
            >
              <Text style={styles.textoBoton}>ImageBackground</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={[styles.boton, { backgroundColor: '#0055ffff' }]}
              onPress={() => setScreen('textimput')}
            >
              <Text style={styles.textoBoton}>TextInput</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.boton, { backgroundColor: '#0055ffff' }]}
              onPress={() => setScreen('password')}
            >
              <Text style={styles.textoBoton}>TextInput Password</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.boton, { backgroundColor: '#c11befff' }]}
              onPress={() => setScreen('scrollview')}
            >
              <Text style={styles.textoBoton}>ScrollView</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.boton, { backgroundColor: '#ca006cff' }]}
              onPress={() => setScreen('ActivityIndicator')}
            >
              <Text style={styles.textoBoton}>ActivityIndicator</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.boton, { backgroundColor: '#058800ff' }]}
              onPress={() => setScreen('FlatList')}
            >
              <Text style={styles.textoBoton}>FlatList</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.boton, { backgroundColor: '#e00202ff' }]}
              onPress={() => setScreen('Modal')}
            >
              <Text style={styles.textoBoton}>Modal</Text>
            </TouchableOpacity>

          </View>
        </View>
      );
  }
}

// 3. Zona de estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dac2eeff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    color: '#430365ff',
    fontSize: 36,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textDecorationLine: 'underline',
    marginBottom: 10,
  },
  botonesContainer: {
    width: '50%',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 20,
  },
  boton: {
    width: '100%',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    boxshadowColor: '#fff',
    boxshadowOpacity: 0.3,
    boxshadowRadius: 5,
    elevation: 5,
  },
  textoBoton: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});