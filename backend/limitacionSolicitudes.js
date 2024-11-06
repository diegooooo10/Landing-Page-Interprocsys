import { db } from "./conexion"; // Importa la conexión a Firebase Firestore
import { query, collection, where, getDocs } from "firebase/firestore";

// Función para verificar el límite de solicitudes
export const verificarLimiteSolicitudes = async (email) => {
  try {
    // Realiza una consulta para contar las solicitudes previas de ese email
    const q = query(collection(db, "contacto"), where("correo", "==", email));
    const snapshot = await getDocs(q);

    console.log(`Consultando correo ${email}...`);
    console.log(
      `Solicitudes encontradas para el correo ${email}: ${snapshot.size}`
    );

    const limite = 1; // Número máximo de solicitudes por correo

    if (snapshot.size >= limite) {
      console.log("Límite alcanzado.");
      return true; // El límite se ha alcanzado
    }

    console.log("Límite no alcanzado.");
    return false; // El límite no se ha alcanzado
  } catch (error) {
    console.error("Error al verificar el límite de solicitudes:", error);
    return false; // Si ocurre un error, no bloquear al usuario
  }
};
