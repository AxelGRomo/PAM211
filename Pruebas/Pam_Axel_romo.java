import java.util.*;

public class Pam_Axel_romo {
   public static void main(String[] args) {
      Scanner scanner = new Scanner(System.in);
      
      int opcion;

      do {
         System.out.println("  __  __                            ____           _                  _                   _ \r\n" + //
                          " |  \\/  |   ___   _ __    _   _    |  _ \\   _ __  (_)  _ __     ___  (_)  _ __     __ _  | |\r\n" + //
                          " | |\\/| |  / _ \\ | '_ \\  | | | |   | |_) | | '__| | | | '_ \\   / __| | | | '_ \\   / _` | | |\r\n" + //
                          " | |  | | |  __/ | | | | | |_| |   |  __/  | |    | | | | | | | (__  | | | |_) | | (_| | | |\r\n" + //
                          " |_|  |_|  \\___| |_| |_|  \\__,_|   |_|     |_|    |_| |_| |_|  \\___| |_| | .__/   \\__,_| |_|\r\n" + //
                          "                                                                         |_|");
         System.out.println("O--------------------O");
         System.out.println("1.- Reglamento POO");
         System.out.println("2.- Lineamientos Classroom");
         System.out.println("3.- Fechas de Parciales");
         System.out.println("4.- Porcentajes Por Parcial");
         System.out.println("5.- Salir");
         System.out.println("O--------------------O");
         System.out.print("¿Que opcion selecciona?: ");
         
         opcion = scanner.nextInt();
         
         switch (opcion) {
            case 1:
               System.out.println("Reglamento POO");
               System.out.println("O--------------------O");
               System.out.println("-\tRespeto");
               System.out.println("-\tImportante participación activa en orden");
               System.out.println("-\tNo entregar trabajos incompletos");
               System.out.println("-\tNo se aplican examen fuera de tiempo");
               System.out.println("-\tPlagio de trabajos = 0 para todos");
               System.out.println("-\t3 faltas = Final parcial");
               System.out.println("-\tCalificación máxima en final 8");
               break;
            case 2:
               System.out.println("Lineamientos Classroom");
               System.out.println("O--------------------O");
               System.out.println("Se requiere:");
               System.out.println("-\tInvestigaciones ");
               System.out.println("-\tMapas mentales, de llaves y/o conceptuales");
               System.out.println("-\tCrucigramas");
               System.out.println("-\tCuestionarios");
               System.out.println("-\tExposiciones");
               System.out.println("---------------------");
               System.out.println("Se ubicara");
               System.out.println("-\tReportes de practica");
               System.out.println("-\tTrabajo en repositorio GutHub");
               System.out.println("-\tVideo Evidencias");
               break;
            case 3:
               System.out.println("Fechas de Parciales");
               System.out.println("O--------------------O");
               System.out.println("-\t1° Parcial: 29 de septiembre del 2025");
               System.out.println("-\t2° Parcial: 03 de noviembre del 2025");
               System.out.println("-\t3° Parcial: 01 de diciembre del 2025");
               System.out.println("-\tExamen final: 08 de diciembre del 2025");
               break;
            case 4:
               System.out.println("Porcentajes Por Parcial");
               System.out.println("O--------------------O");
               System.out.println("-\tPrimer Parcial: 40%");
               System.out.println("-\tSegundo Parcial: 45%");
               System.out.println("-\tTercer Parcial: 35%");
               System.out.println("-\tExamen Final: Maximo 80%");
               break;
            case 5:
               System.out.println("Saliendo del programa...");
               break;
            default:
               System.out.println("Opcion no valida. Por favor intente de nuevo.");
         }
      } while (opcion != 5);
        scanner.close();
    }
}
