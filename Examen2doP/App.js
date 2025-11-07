import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.titulo}>Restaurante NuevaEsperanza</Text>
      <Text> </Text>
      <Text style={styles.descipcion}>Bievenido al restaurante NuevaEsperanza, donde tus platillos preferidos se encuentran</Text>
      <Text style={styles.menu}>Menu</Text>
      <Text> </Text>
      <Text style={styles.tituloCategoria}> Entradas </Text>
      <Text> </Text>
      <Text style={styles.textoCategoria}> Ensaladas </Text>
      <Text style={styles.textoDescripcion}> Ensalada con lechuga, jitomate, cebolla morada </Text>
      <Text style={styles.textoCategoria}> Ceviches </Text>
      <Text style={styles.textoDescripcion}> Ceviche de mariscos marinados</Text>
      <Text style={styles.textoCategoria}> Guacamole </Text>
      <Text style={styles.textoDescripcion}> Rico y confiable guacamole </Text>
      <Text style={styles.textoCategoria}> Nachos </Text>
      <Text style={styles.textoDescripcion}> Ricos nachos con queso y chiles jalapeños </Text>
      <Text> </Text>
      <Text style={styles.tituloCategoria}> Platillos principales </Text>
      <Text> </Text>
      <Text style={styles.textoCategoria}> Tacos </Text>
      <Text style={styles.textoDescripcion}> Ricos tacos de: </Text>
      <Text style={styles.textoDescripcion}> Bisteck </Text>
      <Text style={styles.textoDescripcion}> Chorizo </Text>
      <Text style={styles.textoDescripcion}> Carne asada </Text>
      <Text style={styles.textoCategoria}> Burritos </Text>
      <Text style={styles.textoDescripcion}> Ricos burritos de: </Text>
      <Text style={styles.textoDescripcion}> Bisteck </Text>
      <Text style={styles.textoDescripcion}> Chorizo </Text>
      <Text style={styles.textoDescripcion}> Carne asada </Text>
      <Text style={styles.textoCategoria}> Enchiladas </Text>
      <Text style={styles.textoDescripcion}> Ricas enchiladas: </Text>
      <Text style={styles.textoDescripcion}> Rojas </Text>
      <Text style={styles.textoDescripcion}> Verdes </Text>
      <Text style={styles.textoCategoria}> Gorditas </Text>
      <Text style={styles.textoDescripcion}> Ricas gorditas de: </Text>
      <Text style={styles.textoDescripcion}> Migajas </Text>
      <Text style={styles.textoDescripcion}> Queso </Text>
      <Text style={styles.textoDescripcion}> Calabacitas </Text>
      <Text style={styles.tituloCategoria}> Postres </Text>
      <Text> </Text>
      <Text style={styles.textoCategoria}> Helados </Text>
      <Text style={styles.textoDescripcion}> Ricos helados de: </Text>
      <Text style={styles.textoDescripcion}> Chocolate </Text>
      <Text style={styles.textoDescripcion}> Vainilla </Text>
      <Text style={styles.textoDescripcion}> Fresa </Text>
      <Text style={styles.textoCategoria}> Gelatinas </Text>
      <Text style={styles.textoDescripcion}> Ricas gelatinas de: </Text>
      <Text style={styles.textoDescripcion}> Chocolate </Text>
      <Text style={styles.textoDescripcion}> Vainilla </Text>
      <Text style={styles.textoDescripcion}> Fresa </Text>
      <Text style={styles.textoCategoria}> Dulces </Text>
      <Text style={styles.textoDescripcion}> Ricos dulces: </Text>
      <Text style={styles.textoDescripcion}> Chocolates </Text>
      <Text style={styles.textoDescripcion}> Paletas </Text>
      <Text style={styles.textoDescripcion}> Dulce de leche </Text>
      <Text style={styles.textoCategoria}> Pays </Text>
      <Text> </Text>
      <Text style={styles.tituloCategoria}> Bebidas </Text>
      <Text> </Text>
      <Text style={styles.textoCategoria}> Cerveza </Text>
      <Text style={styles.textoCategoria}> Refrescos </Text>
      <Text style={styles.textoCategoria}> Agua natural </Text>
      <Text style={styles.textoCategoria}> Agua de sabor </Text>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8cfadff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  descipcion: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  menu: {
    fontSize: 40,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  tituloCategoria: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  textoCategoria: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  textoDescripcion: {
    fontSize: 12,
    marginBottom: 10,
    textAlign: 'center',
  },
});
