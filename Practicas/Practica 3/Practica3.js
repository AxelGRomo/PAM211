// ------- //
//    B    //
// ------- //

function verificarUsuario(usuario) {
    return new Promise((resolve, reject) => {
        const Admin = usuario === "Admin";
        if (Admin) {
            resolve("Usuario verificado");
        } else {
            reject("Usuario no autorizado");
        }
    });
}

const usuario = "Ivan";
verificarUsuario(usuario)
    .then((mensaje) => {
        console.log(mensaje);
    })
    .catch((error) => {
        console.error(error);
    });

// ------- //
//    C    //
// ------- //

function simularPeticionAPI() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Datos recibidos correctamente");
        }, 5000);
    });
}

async function obtenerDatos() {
    // Usa await para esperar la promesa de simularPeticion
    const datos = await simularPeticionAPI();
    console.log(datos);
    // Imprimir el resultado
}
obtenerDatos(); 
