// Zona Importaciones
import { Text, StyleSheet, View, Button, Alert, TextInput, Platform } from 'react-native';
import React, { useState } from 'react';

// Zona Componentes
export default function PasswordScreen() {
  const [password, setPassword] = useState('');
  const password_correcta = '12345';
  const verificarContrasena = () => {
    if (password.trim() === '') {
    // Si el usuario no ingreso nada
      if (Platform.OS === 'web') {
        window.alert('Error: Por favor ingresa una contraseña'); // En navegador web
      } else {
        Alert.alert('Error: Por favor ingresa una contraseña'); // En dispositivo móvil 
      }
    // Si el usuario ingreso algo y es correcto
    } else if (password === password_correcta) {
      if (Platform.OS === 'web') {
        window.alert('Bienvenido usuario'); // En navegador web
      } else {
        Alert.alert('Bienvenido usuario'); // En dispositivo móvil 
      }
    // Si el usuario ingreso algo y es incorrecto
    } else {
      if (Platform.OS === 'web') {
        window.alert('Contraseña inválida'); // En navegador web
      } else {
        Alert.alert('Contraseña inválida'); // En dispositivo móvil 
      }
    }
  };

 // Zona de vista en pantalla
  return ( 
    <View style={styles.container}>
      
      <Text style={styles.titulo}>Sistema de Contraseña</Text>

      <TextInput
        style={styles.recuadro}
        placeholder='Ingresa tu contraseña' 
        value={password}    // Valor actual del TextInput
        onChangeText={setPassword}  // Actualiza el valor al escribir
        maxLength={20}  // Límite caracteres
        secureTextEntry={true}  // Para ocultar los caracteres
        keyboardType='numeric' // Teclado numérico 
      />

      <Button
        color='#3c8bcfff'
        title='Continuar'
        onPress={verificarContrasena} // Accion cuando se presiona el boton
      />
    </View>
  );
}

// Zona de estilo
    const styles= StyleSheet.create({
        container :{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'#f5bbd1ff',
            padding:20,
        },
        titulo :{
            fontSize:22,
            fontWeight:'bold',
            marginBottom:15,
        },
        recuadro: {
            borderWidth:1,
            borderColor:'#000000',
            padding:10,
            marginBottom:20,
        },
    });
