import {Text, StyleSheet, View, Alert, Platform, ActivityIndicator, Button} from 'react-native'
import { useState } from 'react'

export default function ActivityScreen(){
    const [cargando, setCargando] = useState(false); // Controlar la ruedita de carga
    const carga =()=> {
        setCargando(true);
        setTimeout(()=>{
            setCargando(false);
            if(Platform.OS === 'web'){
                window.alert('Carga Completa'); 
            } else {
                Alert.alert('Carga completa');
            }
        }, 3000);
    };

    return (
        <View style={styles.container}>
         <Text style={styles.texto}> Presione para iniciar la carga </Text>
         <View style={styles.botonesContainer}>
            {cargando ? (<ActivityIndicator size = 'large' color = 'red'></ActivityIndicator>) : (<Button color = 'brown' tittle = 'Presione para iniciar' onPress={carga}></Button>)}
         </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    texto : {
        color: '#000000',
        fontSize: 30,
        fontFamily: 'Times New Roman',
        fontWeight: 'bold',
        fontStyle: 'italic'
    },
    botonesContainer: {
        marginTop: 20,
        gap: 20,
    },
    
})