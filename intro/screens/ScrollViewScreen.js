import { Text, StyleSheet, View, ScrollView, ImageBackground, Dimensions } from 'react-native'
import React, { Component } from 'react'

const BackgroundImage = require('../assets/gearsofwar.jpg');

export default class ScrollViewScreen extends Component { // Componente de clase
  render() {
    return (
      <ImageBackground
            source={BackgroundImage}
            style ={styles.background}
            resizeMode="cover"
        >
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollArea}
         showsVerticalScrollIndicator={true}>
        <Text style={styles.tittle}>Gears of War y su Historia</Text>

        <Text style={styles.subtitulo}>Edad del Armageddon</Text>
        <Text style={styles.fechas}>
        ~2462 / ~130 A.E
        </Text>
        <Text style={styles.texto}>
        Ocurre la Guerra del Archipiélago.
        </Text>

        <Text style={styles.subtitulo}>Era del Silencio</Text>
        <Text style={styles.fechas}>
        ~2475 - 2512 / ~117 - 80 A.E
        </Text>
        <Text style={styles.texto}>
        La Era del Silencio comienza. La humanidad abandona la guerra y Sera entra en una época dorada.{'\n'}
        {'\n'}
        Se funda la Coalición de Gobiernos Ordenados.{'\n'}
        {'\n'}
        La Imulsión es descubierta en una perforación de explotación petrolífera.{'\n'}
        • El Proceso de Masa Ligera es perfeccionado por la Dra. Helen Cooper, logrando hacer que la Imulsión se convierta en una fuente de energía.{'\n'}
        • La Fiebre del Oro, un estallido económico global impulsado por la explotación de la Imulsión, ocurre.{'\n'}
        {'\n'}
        La Era del Silencio termina. La industria de la Imulsión se desestabiliza por la desenfrenada especulación y demanda de la sustancia que sobrepasa la producción, generando un masivo colapso económico.
        Se funda la Unión de Repúblicas Independientes.
        </Text>

        <Text style={styles.subtitulo}>Guerras del Pendulo</Text>
        <Text style={styles.fechas}>
        2513 / 79 A.E
        </Text>
        <Text style={styles.texto}>
        Un conflicto global de larga duración comienza a barrer la superficie de Sera: la Coalición de Gobiernos Ordenados y la Unión de Repúblicas Independientes emprenden un combate por la Imulsión. A este periodo se le conoce como las Guerras del Péndulo y tuvo una duración de más de 79 años.
        </Text>

        <Text style={styles.fechas}>
        2545 / 47 A.E.
        </Text>
        <Text style={styles.texto}>
        Se suscita el conflicto del Frente Ostri en la República de Ostri.
        </Text>

        <Text style={styles.fechas}>
        2551 / 41 A.E
        </Text>
        <Text style={styles.texto}>
        Nacimiento de Bernadette Mataki en Galangi.
        </Text>

        <Text style={styles.fechas}>
        2570 / 22 A.E
        </Text>
        <Text style={styles.texto}>
        Nacimiento de Marcus Michael Fenix y Carlos Santiago.
        </Text>
        
        <Text style={styles.fechas}>
        2571 / 21 A.E
        </Text>
        <Text style={styles.texto}>
        Brume {'\n'}
        Nacimiento de Dominic Santiago.
        </Text>

        <Text style={styles.fechas}>
        2575 / 17 A.E
        </Text>
        <Text style={styles.texto}>
        El King Raven es introducido a la armada de la CGO.{'\n'}
        {'\n'}
        Renuncia del presidente de Vasgar, Ilim.{'\n'}
        • Vasgar es ocupado por los "pacificadores" de la Unión de Repúblicas Independientes bajo las ordenes del primer ministro Daniel Vari.
        Inicia la invasión de Kashkur.{'\n'}
        • El Asedio de Anvil Gate ocurre en el sureste.{'\n'}
        • Las batallas de Shavad y Ragani ocurren en el suroeste.{'\n'}
        {'\n'}
        El Mayor Adam Fenix se retira del ejercito de la CGO para trabajar como científico jefe en la Agencia de Investigación de Defensa.{'\n'}
        Dos meses después del Asedio de Anvil Gate, el Teniente Victor Hoffman lidera el Asalto a Gralia en la República de Lauczi.
        </Text>
        
        <Text style={styles.fechas}>
        
        </Text>
        <Text style={styles.texto}>
        
        </Text>

        <Text style={styles.fechas}>
        
        </Text>
        <Text style={styles.texto}>
        
        </Text>
        
        <Text style={styles.fechas}>
        
        </Text>
        <Text style={styles.texto}>
        
        </Text>

        <Text style={styles.fechas}>
        
        </Text>
        <Text style={styles.texto}>
        
        </Text>
        
        <Text style={styles.fechas}>
        
        </Text>
        <Text style={styles.texto}>
        
        </Text>

        <Text style={styles.fechas}>
        
        </Text>
        <Text style={styles.texto}>
        
        </Text>


        <Text style={styles.subtitulo}>Guerra Locust</Text>
        <Text style={styles.fechas}>
        
        </Text>
        <Text style={styles.texto}>
        
        </Text>
        <Text style={styles.subtitulo}>Pandemia Lambent</Text>

        <Text style={styles.subtitulo}>Periodo de paz y Movimiento Forastero</Text>

        <Text style={styles.subtitulo}>Crisis del Enjambre</Text>
        </ScrollView>
      </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
    
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // capa oscura sobre la imagen
    paddingTop: 40,
  },
  overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  // Este estilo controla TODO lo que está DENTRO del ScrollView
  scrollArea: {
    flexDirection: 'column', // Los elementos se apilan en columna
    alignItems: 'center', // Centrar los elementos horizontalmente
    padding: 10,       // Le da espacio interno para que no se peguen
  },
  tittle : {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#ffffffff',
  },
  subtitulo: {
    fontSize: 35,
    fontWeight: 'bold', // Texto en negrita
    backgroundColor: '#881515ff', // Color de fondo
    color: '#ffffffff', // Color de la letra
    padding: 20, // Espacio interno
    marginVertical: 10, // Espacio arriba y abajo
    borderRadius: 10, // Bordes redondeados
    textAlign: 'center', // Alineacion
    width: '60%',  // Ancho para los subtítulos
    lineHeight: 15,    // Altura de línea
  },
  fechas: {
    fontSize: 25, // Tamaño letra
    color: '#ffffffff', // Color letra
    marginBottom: 10, // Espacio abajo
    textAlign: 'center', // Alineacion
    fontStyle: 'italic', // Estilo
  },
  texto: {
    fontSize: 18,
    color: '#ffffffff',
    marginBottom: 10,
    textAlign: 'center',
    maxWidth: '80%',
  },

})