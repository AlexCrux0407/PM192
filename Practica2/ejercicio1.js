// Desestructuración
const persona = {
    nombre: 'Alexis',
    edad: 21,
    direccion: {
        ciudad: 'Querétaro',
        pais: 'México'
    }
}
const { nombre, edad } = persona;
const { ciudad, pais } = persona.direccion;
console.log("Hola, me llamo " + nombre + " y tengo " + edad + " años y vivo en " + ciudad + ", " + pais + ".");
