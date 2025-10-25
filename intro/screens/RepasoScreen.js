// Zona Importaciones
import { Text, StyleSheet, View, Button, Alert, TextInput, Platform, ImageBackground, TouchableOpacity, Switch  } from 'react-native';
import React, { useState, useEffect } from 'react';

// Zona Assets (Fondos)
const carga = require('../assets/fondomorado.gif');
const BackgroundImage = require('../assets/descansar.gif');

// Zona Componentes
export default function RepasoScreen() {
  const [nombreusuario, setnombreusuario] = useState('');
  const [correo, setCorreo] = useState('');
  const [aceptar, setaceptar] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  const verificardatos = () => {
    // Validar que ambos campos no estén vacíos
    if (nombreusuario.trim() === '' || correo.trim() === '') {
      if (nombreusuario.trim() === '' && correo.trim() === '') {
        
        // Cuando ambos campos están vacíos
        if (Platform.OS === 'web') {
          window.alert('Error: \n' + 'Por favor complete todos los campos');
        } else {
          Alert.alert('Error: ', 'Por favor complete todos los campos');
        }

        // Solo si falta el nombre
      } else if (nombreusuario.trim() === '') {
        if (Platform.OS === 'web') {
          window.alert('Error: \n' + 'Por favor ingrese su nombre');
        } else {
          Alert.alert('Error: ' , 'Por favor ingrese su nombre');
        }
      } else { // Solo si falta el correo
        if (Platform.OS === 'web') {
          window.alert('Error: \n' + 'Por favor ingrese su correo electrónico');
        } else {
          Alert.alert('Error: ' , 'Por favor ingrese su correo electrónico');
        }
      }
      return; // Salir de la función y no continuar
    }

    // Validar que el correo sea válido
    const verificarcorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Para verificar que se ingrese un @ y un dominio
    if (!verificarcorreo.test(correo.trim())) {
      if (Platform.OS === 'web') {
        window.alert('Error: \n' + 'Por favor ingrese un correo electrónico válido');
      } else {
        Alert.alert('Error: ' , 'Por favor ingrese un correo electrónico válido');
      }
      return; // Salir de la función
    }

    // Validar que se acepten los términos
    if (!aceptar) {
      if (Platform.OS === 'web') {
        window.alert('Error:\n' + 'Debe aceptar los términos y condiciones');
      } else {
        Alert.alert('Error: ' , 'Debe aceptar los términos y condiciones');
      }
      return;
    }

    // Si todo es correcto
    if (Platform.OS === 'web') {
      window.alert('Registro Exitoso\n' + 'Nombre: ' + nombreusuario + '\n' + 'Email: ' + correo);
    } else {
      Alert.alert('Registro Exitoso', 'Nombre: ' + nombreusuario + '\n' + 'Email: ' + correo);
    }
  };
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSplash(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);
    if (showSplash) {
            return (
                <ImageBackground
                    source={carga}
                    style ={styles.cargando}
                    resizeMode="cover"
                >
                    {/* --- Contenido del splash --- */}
                    <View style={styles.overlay}>
                        <Text style={styles.tittle}>Bienvenido a la App</Text>
                        <Text style={styles.carga}>Cargando...</Text>
                    </View>
                </ImageBackground>
            );
        }

 // Zona de vista en pantalla
  return ( 
    <ImageBackground
                source={BackgroundImage}
                style ={styles.background}
                resizeMode="cover"
            >
    <View style={styles.container}>
      
      <Text style={styles.titulo}>Registro de Usuario</Text>
      {/* Nombre Usuario */}
      <TextInput
        style={styles.recuadro}
        placeholder='Nombre completo' 
        value={nombreusuario}    // Valor actual del TextInput
        onChangeText={setnombreusuario}  // Actualiza el valor al escribir
        maxLength={50}  // Límite caracteres
      />
      {/* Correo electronico */}
      <TextInput
        style={styles.recuadro}
        placeholder='Correo electrónico' 
        value={correo}    // Valor actual del TextInput
        onChangeText={setCorreo}  // Actualiza el valor al escribir
        maxLength={50}  // Límite caracteres
        keyboardType='email-address' // Teclado para email
      />

      {/* Aceptar Terminos y Condiciones */}
        <View style={styles.switchContainer}>
            <Text style={[styles.switchLabel, {color: '#fff'}]}>Aceptar Términos y Condiciones:</Text>
            <Switch value={aceptar} onValueChange={setaceptar} />
        </View>
    

      {/* Verificar */}
      <Button
        color='#3c8bcfff'
        title='Continuar'
        onPress={verificardatos}// Accion cuando se presiona el boton
      />
    </View>
    </ImageBackground>
  );
}

// Zona de estilo
const styles= StyleSheet.create({
    container :{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:20,
    },
    titulo :{
        fontSize:22,
        fontWeight:'bold',
        marginBottom:15,
        color: '#fff',
    },
    recuadro: {
        borderWidth:1,
        borderColor:'#000000',
        padding:10,
        marginBottom:20,
    },
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    switchLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        marginRight: 10,
    },
    cargando: {
        width: '100%',
        height: '100%',
    },
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tittle: {
        color: '#ffffff',
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    carga: {
        color: '#ffffff',
        fontSize: 18,
        marginTop: 10,
    },
});