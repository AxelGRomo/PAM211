// 1. Zona importaciones
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import BotonesScreen from './BotonesScreen';
import ContadorScreen from './ContadorScreen';
import TextimputScreen from './TextimputScreen';
import PasswordInput from './PasswordScreen';

// 2. Zona de main o componentes
export default function MenuScreen() {
  const [screen, setScreen] = useState('menu');

  switch (screen) {
    case 'contador':
      return <ContadorScreen />;
    case 'botones':
      return <BotonesScreen />;
    case 'textimput':
      return <TextimputScreen />;
    case 'contraseña':
      return <PasswordInput />;
    case 'menu':
    default:
      return (
        <View style={styles.container}>
          {/* Título principal */}
          <Text style={styles.titulo}>Menú de Prácticas</Text>

          {/* Contenedor de botones */}
          <View style={styles.botonesContainer}>
            {/* Botón 1 */}
            <TouchableOpacity
              style={[styles.boton, { backgroundColor: '#c72e2eff' }]}
              onPress={() => setScreen('contador')}
            >
              <Text style={styles.textoBoton}>Pract: Contador</Text>
            </TouchableOpacity>

            {/* Botón 2 */}
            <TouchableOpacity
              style={[styles.boton, { backgroundColor: '#3d99dcff' }]}
              onPress={() => setScreen('botones')}
            >
              <Text style={styles.textoBoton}>Pract: Botones</Text>
            </TouchableOpacity>

            {/* Botón 3 */}
            <TouchableOpacity
              style={[styles.boton, { backgroundColor: '#eecc44ff' }]}
              onPress={() => setScreen('textimput')}
            >
              <Text style={styles.textoBoton}>Pract: TextInput / Alerts</Text>
            </TouchableOpacity>

            {/* Botón 4 */}
            <TouchableOpacity
              style={[styles.boton, { backgroundColor: '#1bef37ff' }]}
              onPress={() => setScreen('scrollview')}
            >
              <Text style={styles.textoBoton}>Pract: ScrollView</Text>
            </TouchableOpacity>

            {/* Botón 5 */}
            <TouchableOpacity
              style={[styles.boton, { backgroundColor: '#1bdaefff' }]}
              onPress={() => setScreen('contraseña')}
            >
              <Text style={styles.textoBoton}>Pract: Ejemplo Contraseña</Text>
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
    backgroundColor: '#ca9ceaff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  titulo: {
    color: '#ffffffff',
    fontSize: 36,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textDecorationLine: 'underline',
    marginBottom: 10,
  },

  subtitulo: {
    color: '#ffffffab',
    fontSize: 18,
    marginBottom: 40,
  },

  botonesContainer: {
    width: '80%',
    flexDirection: 'column', // Los botones se colocan verticalmente
    alignItems: 'center',
    gap: 20, // Espacio entre cada botón
  },

  boton: {
    width: '100%',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#fff',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },

  textoBoton: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});