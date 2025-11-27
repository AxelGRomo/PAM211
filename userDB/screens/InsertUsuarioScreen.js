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

const [editando, setEditando] = useState(false);
const [idUsuarioEditando, setIdUsuarioEditando] = useState(null);

// SELECT - Cargar usuarios desde la BD
const cargarUsuarios = useCallback(async () => {
try {
setLoading(true);
const data = await controller.obtenerUsuarios();
setUsuarios(data);
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
controller.addListener(cargarUsuarios);

return () => {
controller.removeListener(cargarUsuarios);
};
}, [cargarUsuarios]);


// INSERT & UPDATE - Agregar Nuevo Usuario o Guardar Edición
const handleAgregar = async () => {
  if (guardando) return;
  if (!nombre.trim()) {
    Alert.alert('Advertencia', 'El nombre no puede estar vacío.');
    return;
  }

  try {
    setGuardando(true);
    if (editando) {
      const usuarioActualizado = await controller.actualizarUsuario(idUsuarioEditando, nombre);
      Alert.alert('Usuario Actualizado', `${usuarioActualizado.nombre} actualizado.`);
      
      setEditando(false);
      setIdUsuarioEditando(null);

    } else {
      const usuarioCreado = await controller.crearUsuario(nombre);
      Alert.alert('Usuario Creado', `${usuarioCreado.nombre} guardado con ID: ${usuarioCreado.id}`);
    }
    
    setNombre('');
  } catch (error) {
    Alert.alert('Error', error.message);
  } finally {
    setGuardando(false);
  }
};

// DELETE - Eliminar Usuario
const handleEliminar = (id, nombreUsuario) => {
  Alert.alert(
    'Confirmar Eliminación',
    `¿Estás seguro de que quieres eliminar a ${nombreUsuario}?`,
    [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Eliminar',
        onPress: async () => {
          try {
            if (id === idUsuarioEditando) {
              setEditando(false);
              setIdUsuarioEditando(null);
              setNombre('');
            }

            await controller.eliminarUsuario(id);
            Alert.alert('Eliminado', `${nombreUsuario} ha sido eliminado.`);
          } catch (error) {
            Alert.alert('Error', error.message);
          }
        },
        style: 'destructive',
      },
    ]
  );
};

// Activar modo edición
const iniciarEdicion = (usuario) => {
  setNombre(usuario.nombre);
  setIdUsuarioEditando(usuario.id);
  setEditando(true);
};

// Renderizar cada Usuario
const renderUsuario = ({ item, index }) => (
<View style={styles.cardWrapper}> 
<View style={styles.userItem}>
<View style={styles.userNumber}>
<Text style={styles.userNumberText}>{index + 1}</Text>
</View>
<View style={styles.userInfo}>
<Text style={[styles.userName, item.id === idUsuarioEditando && styles.editingUserName]}>
    {item.nombre} {item.id === idUsuarioEditando ? '(Editando)' : ''}
</Text>
<Text style={styles.userId}>ID: {item.id}</Text>
<Text style={styles.userData}>
{new Date(item.fechaCreacion).toLocaleDateString('es-MX', {
year: 'numeric',
month: 'long',
day: 'numeric'
})}
</Text>
</View>
<View style={styles.actionsContainer}>
    <TouchableOpacity 
      style={styles.editButton} 
      onPress={() => iniciarEdicion(item)}>
      <Text style={styles.actionButtonText}>Editar</Text>
    </TouchableOpacity>
    <TouchableOpacity 
      style={styles.deleteButton} 
      onPress={() => handleEliminar(item.id, item.nombre)}>
      <Text style={styles.actionButtonText}>Eliminar</Text>
    </TouchableOpacity>
  </View>
</View>
</View>
);

return (
<View style={styles.container}>
<Text style={styles.title}>{editando ? 'ACTUALIZAR & ELIMINAR' : 'INSERT & SELECT'}</Text>
<Text style={styles.heading}>{editando ? 'Actualizar Usuario' : 'Insertar Usuario'}</Text>
<TextInput
  style={styles.input}
  placeholder="Escribe el nombre del usuario"
  value={nombre}
  onChangeText={setNombre}
/>
<TouchableOpacity 
  // CORRECCIÓN: SOLO aplicamos buttonDisabled si guardando es TRUE
  style={[styles.button, guardando ? styles.buttonDisabled : null]} 
  onPress={handleAgregar}
  // Mantenemos la lógica de deshabilitación del botón aquí
  disabled={guardando || !nombre.trim()}
>
  {guardando ? (
    <ActivityIndicator color="#fff" />
  ) : (
    <Text style={styles.buttonText}>{editando ? 'Guardar Cambios' : 'Agregar Usuario'}</Text>
  )}
</TouchableOpacity>

{editando && (
  <TouchableOpacity style={styles.cancelButton} onPress={() => {
    setEditando(false);
    setIdUsuarioEditando(null);
    setNombre('');
  }}>
    <Text style={styles.cancelButtonText}>Cancelar Edición</Text>
  </TouchableOpacity>
)}

<View style={styles.headingListContainer}>
  <Text style={styles.headingList}>Lista de Usuarios</Text>
</View>

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

// Estilos
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
  backgroundColor: '#007AFF', // Azul
  padding: 15,
  borderRadius: 5,
  alignItems: 'center',
},
// buttonDisabled ahora solo se usa cuando guardando=true
buttonDisabled: {
  backgroundColor: '#A0A0A0', // Gris
},
buttonText: {
  color: '#fff',
  fontSize: 16,
  fontWeight: 'bold',
},
headingListContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  marginTop: 30,
},
headingList: {
  fontSize: 18,
  fontWeight: '600',
  marginBottom: 10,
},
cardWrapper: {
  backgroundColor: '#fff',
  borderRadius: 8,
  marginVertical: 8,
  padding: 10,
  borderLeftWidth: 5, 
  borderLeftColor: '#007AFF', 
  elevation: 2, 
  shadowColor: '#000', 
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.1,
  shadowRadius: 1,
},
userItem: {
  flexDirection: 'row',
  paddingVertical: 0,
  alignItems: 'center',
},
userNumber: {
  width: 30,
  height: 30,
  borderRadius: 15,
  backgroundColor: '#007AFF', // Azul
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
    marginTop: 10,
    padding: 5,
},
reloadButtonText: {
    color: '#007AFF',
    fontSize: 14,
},
editingUserName: {
  color: '#007AFF', 
},
actionsContainer: {
  flexDirection: 'row',
  marginLeft: 10,
},
editButton: {
  backgroundColor: '#FFC107', 
  padding: 8,
  borderRadius: 5,
  marginLeft: 5,
},
deleteButton: {
  backgroundColor: '#D9534F', 
  padding: 8,
  borderRadius: 5,
  marginLeft: 5,
},
actionButtonText: {
  color: '#fff',
  fontSize: 12,
  fontWeight: 'bold',
},
cancelButton: {
  alignItems: 'center',
  marginTop: 5,
  padding: 10,
},
cancelButtonText: {
  color: '#D9534F',
  fontSize: 14,
  fontWeight: 'bold',
},
});