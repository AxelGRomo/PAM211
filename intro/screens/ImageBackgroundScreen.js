import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, ImageBackground, Dimensions } from 'react-native';

const BackgroundImage = require('../assets/fondomorado.gif');

export default function ImageBackgroundScreen({navigation}) {
    const [showSplash, setShowSplash] = useState(true); 

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSplash(false);
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    if (showSplash) {
        return (
            <ImageBackground
                source={BackgroundImage}
                style ={styles.background}
                resizeMode="cover"
            >
                {/* --- Viñeta negra (oscurece la imagen) --- */}
                <View style={styles.vineta} />

                {/* --- Contenido del splash --- */}
                <View style={styles.overlay}>
                    <Text style={styles.tittle}>Bienvenido a la App</Text>
                    <Text style={styles.carga}>Cargando...</Text>
                </View>
            </ImageBackground>
        );
    }

    return (
        <ImageBackground
            source={BackgroundImage}
            style ={styles.background}
            resizeMode="cover"
        >
            <View style={styles.mainScreen}>
                <Text style={styles.mainText}>Bienvenido a la pantalla principal.</Text>
            </View>
        </ImageBackground>
    );
}

// 3. Zona de estilos
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    background: {
        width: width,
        height: height,
    },
    vineta: {
        ...StyleSheet.absoluteFillObject, // cubre toda la imagen
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // negro con transparencia (ajusta el 0.5 si lo quieres más claro/oscuro)
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
    mainScreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainText: {
        fontSize: 24,
        color: '#ffffff',
    },
    carga: {
        color: '#ffffff',
        fontSize: 18,
        marginTop: 10,
    },
});