// Zona Importaciones
import { Text, StyleSheet, View, Button, Alert, TextInput, Platform } from 'react-native';
import React, { useState } from 'react';

// Zona Componentes
export default function TextimputScreen() {
const [nombre, setNombre]= useState('');

const mostrarAlerta=()=>{
    if (nombre.trim()===''){
        if (Platform.OS==='web'){
            window.alert('Error: Por favor ingresa tu nombre'); // Ejecutar en windows
        } else {
            Alert.alert('Error','Por favor ingresa tu nombre'); // Ejecutar en telefono
        }} 
          else {
            if (Platform.OS==='web'){
                window.alert('Hola '+ nombre); // Ejecutar en windows
        } else {
            Alert.alert('Hola '+ nombre); // Ejecutar en telefono
        }
        }}

 // Zona de vista en pantalla
        return(
            // Estilo de contador
            <View style={styles.container}>
                <Text style={styles.titulo}>Text Imput Screen</Text>

                <TextInput
                style={styles.recuadro}
                placeholder='Ingresa tu nombre'
                value ={nombre}
                onChangeText={setNombre} //Guardar el texto
                maxLength={50} // Maximo de caracteres
                />
                
                <Button color = '#3c8bcfff' title='Mostrar Saludo' onPress={mostrarAlerta}/>
            </View>
        )
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

    