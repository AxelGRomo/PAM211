// 1.- Imports: Zona de importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';


// 2.-  Main: Zona de componentes
export default function ContadorScreen() {

   const[contador,setContador]= useState(0);

  return (
    // Propiedad (Style), objeto(styles), clase(container)
    <View style={styles.container}>

      <Text style={styles.texto} > Contador </Text>
      <Text style={styles.texto2} > {contador} </Text>

      <View style={styles.botonesContainer}>
      <Button color='#271fc9ff' title='Agregar' onPress={()=>setContador(contador + 1)}/>
      <Button title='Quitar' onPress={()=>setContador(contador - 1)}/>
      <Button title='Reiniciar' onPress={()=>setContador(0)}/>
      </View>

      <StatusBar style="auto" />

    </View>
  );
}

// 3.-Estilos: Zona estetica para componentes
const styles = StyleSheet.create({
  container: { // Objeto JavaScript
    flex: 1, // Para repartir
    backgroundColor: '#d7c3e9ff', // Color del fondo
    alignItems: 'center', // Eje x
    justifyContent: 'center', // Eje y
},
texto:{
  color:'#2600ffff', // Color
  fontSize:30, // Tamaño
  /* fontFamily: 'Time New Roman', Tipo de letra */
  fontWeight: 'bold', // Negritas
  fontStyle: 'italic', // Inclinada
  textDecorationLine: 'line-through', // Tachada
},

texto2:{
  color:'#00ff1eff', // Color
  fontSize:50, // Tamaño
  fontFamily: 'Time New Roman', // Tipo de letra
  fontWeight: '300', // Negritas
  fontStyle: 'italic', // Inclinada
  textDecorationLine: 'underline', // Linea Baja
},

// Clase para botones

botonesContainer:{
  marginTop: 20, // Margen superior
  flexDirection: 'row', // Direccion de los elementos: colum, row, row-reverse, column-reverse
  gap: 50, // Separacion entre los elementos (Proporciones)
  // width: '60%', // Ancho (Separacion entre los botones)
  // justifyContent: 'space-between', // Separacion entre los elementos
},
});