//find(), foreach(), reduce()
const personas =[
    { nombre: "Ana", edad: 22 },
    { nombre: "Luis", edad: 35 },
    { nombre: "María", edad: 28 }
];
// find()
const persona_encontrada = personas.find((persona) => persona.nombre === "Luis");
console.log("Persona encontrada:", persona_encontrada);
//foreach()
personas.forEach((persona) => {
    console.log("Nombre: " +persona.nombre + " Edad: " + persona.edad);
});
//reduce()
const suma_edades = personas.reduce((suma, persona) => suma + persona.edad,0);
console.log("Suma de edades:" + suma_edades);
