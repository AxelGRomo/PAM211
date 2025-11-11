import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Modal} from 'react-native';

export default function ModalScreen() {
    const [modalVisible, setModalVisible] = useState(false);// Uso del modal (estado)
    return (
        <View style = {styles.container}> 
            <Button title = 'Mostrar Modal' onPress={()=> setModalVisible(true)} color = 'purple'>
            Presioname
            </Button>
            <Modal
                animationType= 'fade' // fade = desvanecer, none = nada , slide = sube
                transparent = 'true' // Fondo transparente
                visible = {modalVisible} // Visible el modal
                onRequestClose={()=> setModalVisible(false)} // Cerrar el modal
            >
                <View style = {styles.modalContainer}>
                    <View style = {styles.modalContent}>
                        <Text style = {styles.textoModal}>
                            Soy un modal
                        </Text>
                        <Button title = 'Ocutar Menu' onPress={() => setModalVisible(false)} color = 'purple'>
                        </Button>
                    </View>
                </View>
            </Modal>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#7ba4f7ff'
    },
    modalContent: {
        backgroundColor: '#ffffff',
        padding: 25,
        borderRadius: 15,
        alignItems: 'center',
    },
    textoModal: {
        color: '#000000',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 15,
    },
});