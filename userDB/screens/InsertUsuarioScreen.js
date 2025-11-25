import { useEffect, useState, useCallback } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList,
StyleSheet, Alert, ActivityIndicator, Platform } from 'react-native';
import { UsuarioController } from '../controllers/UsuarioController';

const controller = new UsuarioController();

export default function UsuarioView() {
const [usuarios, setUsuarios] = useState([]);
const [nombre, setNombre] = useState('');
const [loading, setLoading] = useState(true);
const [guardando, setGuardando] = useState(false);

// SELECT - Cargar usuarios desde la BD
const cargarUsuarios = useCallback(async () => {
try {
setLoading(true);
const data = await controller.obtenerUsuarios();
setUsuarios(data);
console.log(`${data.length} usuarios cargados`);
} catch (error) {
Alert.alert('Error', error.message);
} finally {
setLoading(false);
}
}, []);

// Inicializar y cargar datos
useEffect(() => {
const init = async () => {
await controller.initialize();
await cargarUsuarios();
};

init();
// avisar los cambios automáticos
controller.addListener(cargarUsuarios);

return () => {
controller.removeListener(cargarUsuarios);
};
}, [cargarUsuarios]);


// INSERT - Agregar Nuevo Usuario
const handleAgregar = async () => {
if (guardando) return;
try {
setGuardando(true);
const usuarioCreado = await controller.crearUsuario(nombre);
Alert.alert('Usuario Creado', `${usuarioCreado.nombre} guardado con ID: ${usuarioCreado.id}`);
setNombre('');
} catch (error) {
Alert.alert('Error', error.message);
} finally {
setGuardando(false);
}
};

// Renderizar cada Usuario
const renderUsuario = ({ item, index }) => (
<View style={styles.userItem}>
<View style={styles.userNumber}>
<Text style={styles.userNumberText}>{index + 1}</Text>
</View>
<View style={styles.userInfo}>
<Text style={styles.userName}>{item.nombre}</Text>
<Text style={styles.userId}>ID: {item.id}</Text>
<Text style={styles.userData}>
{new Date(item.fechaCreacion).toLocaleDateString('es-MX', {
year: 'numeric',
month: 'long',
day: 'numeric'
})}
</Text>
</View>
</View>
);

return (
<View style={styles.container}>
<Text style={styles.title}>INSERT & SELECT</Text>
<Text style={styles.heading}>Insertar Usuario</Text>
<TextInput
  style={styles.input}
  placeholder="Escribe el nombre del usuario"
  value={nombre}
  onChangeText={setNombre}
/>
<TouchableOpacity 
  style={[styles.button, guardando && styles.buttonDisabled]} 
  onPress={handleAgregar}
  disabled={guardando}
>
  {guardando ? (
    <ActivityIndicator color="#fff" />
  ) : (
    <Text style={styles.buttonText}>Agregar Usuario</Text>
  )}
</TouchableOpacity>

<Text style={styles.headingList}>Lista de Usuarios</Text>
{loading ? (
  <ActivityIndicator size="large" color="#007AFF" />
) : (
  <FlatList
    data={usuarios}
    keyExtractor={(item) => item.id.toString()}
    renderItem={renderUsuario}
  />
)}

<TouchableOpacity onPress={cargarUsuarios} style={styles.reloadButton}>
    <Text style={styles.reloadButtonText}>Recargar</Text>
</TouchableOpacity>
</View>
);
}

// Estilos básicos para que el componente se vea similar a las capturas
const styles = StyleSheet.create({
container: {
  flex: 1,
  padding: 20,
  backgroundColor: '#f8f8f8',
},
title: {
  fontSize: 24,
  fontWeight: 'bold',
  textAlign: 'center',
  marginVertical: 10,
},
heading: {
  fontSize: 18,
  fontWeight: '600',
  marginTop: 20,
  marginBottom: 10,
},
input: {
  borderWidth: 1,
  borderColor: '#ccc',
  padding: 10,
  marginBottom: 15,
  borderRadius: 5,
  backgroundColor: '#fff',
},
button: {
  backgroundColor: '#007AFF',
  padding: 15,
  borderRadius: 5,
  alignItems: 'center',
},
buttonDisabled: {
  backgroundColor: '#A0A0A0',
},
buttonText: {
  color: '#fff',
  fontSize: 16,
  fontWeight: 'bold',
},
headingList: {
  fontSize: 18,
  fontWeight: '600',
  marginTop: 30,
  marginBottom: 10,
},
userItem: {
  flexDirection: 'row',
  paddingVertical: 10,
  borderBottomWidth: 1,
  borderBottomColor: '#eee',
},
userNumber: {
  width: 30,
  height: 30,
  borderRadius: 15,
  backgroundColor: '#D9534F', 
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: 10,
},
userNumberText: {
  color: '#fff',
  fontWeight: 'bold',
},
userInfo: {
  flex: 1,
},
userName: {
  fontSize: 16,
  fontWeight: 'bold',
},
userId: {
  fontSize: 12,
  color: '#666',
},
userData: {
  fontSize: 12,
  color: '#999',
},
reloadButton: {
    alignSelf: 'flex-end',
    marginTop: 5,
    padding: 5,
},
reloadButtonText: {
    color: '#007AFF',
    fontSize: 14,
}
});