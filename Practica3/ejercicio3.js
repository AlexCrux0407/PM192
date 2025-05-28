function simularPeticionAPI(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("datos recibidos correctamente");
        }, 5000);
});
}
async function obtenerDatos(){
        const resultado = await simularPeticionAPI();
        console.log(resultado);
    } 

async function ejecutar(){
    console.log("Iniciando la petición...");
    await obtenerDatos();
    console.log("Petición completada.");
}
ejecutar();