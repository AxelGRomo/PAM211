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
        Ocurre la Guerra del Archipiélago.{'\n'}
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
        2583 / 9 A.E
        </Text>
        <Text style={styles.texto}>
        Brume {'\n'}
        • La doctora Elain Fenix descubre a la Horda Locust. En un intento de hacer contacto con ellos, es capturada y asesinada. Es declarada como desaparecida y posiblemente muerta.
        </Text>

        <Text style={styles.fechas}>
        2585 / 7 A.E
        </Text>
        <Text style={styles.texto}>
        El origen de la infección Lambent dentro de la Hondonada provoca una Guerra Civil contra los principales habitantes del lugar: los Locust.
        </Text>
        
        <Text style={styles.fechas}>
        2588 / 4 A.E
        </Text>
        <Text style={styles.texto}>
        Storm{'\n'}
        • María Flores se embaraza del bebé de Dominic Santiago.{'\n'}
        • Marcus Fenix se une al ejercito de la CGO, en contra de los deseos de su padre, junto con Carlos Santiago.{'\n'}
        • Dominic Santiago y María Flores contraen matrimonio.{'\n'}
          {'\n'}
        Frost{'\n'}
        • Nacimiento de Benedicto Santiago.{'\n'}
          {'\n'}
        Thaw{'\n'}
        • Dominic Santiago se une al ejercito de la CGO.{'\n'}
          {'\n'}
        Fecha sin determinar{'\n'}
        • Toman lugar severos Asaltos en los Campos de Imulsión de Acastu.{'\n'}
        • Ocurre la Batalla de la Isla Irohma.
        </Text>

        <Text style={styles.fechas}>
        2589 / 3 A.E
        </Text>
        <Text style={styles.texto}>
        Ocurre el Incidente en la frontera Sarfuth-Maranday.{'\n'}
        La CGO descubre el desarrollo del Martillo del Alba de la URI en Punto Aspho. Inician los planes para capturar la investigación.{'\n'}
        </Text>
        
        <Text style={styles.fechas}>
        2590 / 2 A.E
        </Text>
        <Text style={styles.texto}>
          Brume{'\n'}
          - 14 de Brume{'\n'}
          • Sylvia Santiago nace prematuramente.{'\n'}
          {'\n'}
          - 15 de Brume{'\n'}
          • La CGO se infiltra en un puesto avanzado de la URI con la Operación: Nivelador para robar la información de su nuevo proyecto. Carlos Santiago, Helena Stroud y Dan Kennen mueren en la operación. El Prof. Adam Fenix comienza a desarrollarlo.{'\n'}
        </Text>

        <Text style={styles.fechas}>
        2592 / 0 A.E
        </Text>
        <Text style={styles.texto}>
        Bloom{'\n'}
        {'\n'}
        • 32 de Bloom {'\n'} 
         {'\n'}
        - Las fuerzas de la CGO se enfrentan contra fuerzas de la URI en la República Independiente de Furlin en la Escaramuza en Ciudad Ghato. {'\n'}
         {'\n'}
        • Fecha sin determinar  {'\n'}
         {'\n'}
        - El Prof. Adam Fenix termina la elaboración del Martillo del Alba satisfactoriamente, siendo galardonado con la Medalla Octus. {'\n'}
         {'\n'}
        Reap {'\n'}
        {'\n'}
        • 6 de Reap  {'\n'}
         {'\n'}
        - La Tercera Flota de la URI ataca las fuerzas de la CGO en Bonbourg, siendo desplegado el Martillo del Alba como respuesta. {'\n'}
        {'\n'}
        • 11 de Reap  {'\n'}
         {'\n'}
        - El primer ministro Yori Deschenko firma el Armisticio URI-CGO con el presidente Tomas Dalyell de la CGO.{'\n'}
        - Ocurre la Escaramuza en el Acantilado de Furlin, siendo una de las últimas batallas de las Guerras del Péndulo, iniciando y finalizando durante el armisticio.{'\n'}
        - Las Guerras del Péndulo concluyen, con la Coalición de Gobiernos Ordenados como victoriosa.{'\n'}
        - La República de Gorasnaya se rehusa a rendirse ante la CGO, continuando la batalla en forma de guerrillas.{'\n'}
        {'\n'}
        • 14 de Reap  {'\n'}
        {'\n'}
        - Para prevenir el lanzamiento de 3 satélites del Martillo del Alba, la CGO lanza un Misil de Masa Ligera desde Azura hacía el Centro de Entrenamiento de Cosmonautas, sofocando el Motín en OZP-11. El comandante Garron Paduk es herido gravemente.{'\n'}
        {'\n'}
        • Fecha sin determinar{'\n'}
        {'\n'}
        - Se suscita la batalla de Gatka Ridge, donde se logra evitar el dominio de la URI sobre un yacimiento de Imulsión colapsando la montaña adyacente sobre ella.{'\n'}
        - Tras una disputa interna Locust, Vold RAAM logra ascender al cargo de Uzil por parte de la Reina Myrrah, logrando destituir a Uzil Sraak de su cargo.{'\n'}
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
    textAlign: '',
    maxWidth: '80%',
  },
  textosubtitulo: {
    fontSize: 20,
    color: '#ffffffff',
    marginBottom: 10,
    textAlign: 'bold',
    maxWidth: '80%',
  },
})