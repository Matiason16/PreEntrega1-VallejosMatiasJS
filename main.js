const usuarios = [
    { nombre: 'juan', edad: 25 }
];





usuarios.forEach(usuario => {
alert(`Usuario:${usuario.nombre} Edad:${usuario.edad}`);
});







const nombre = prompt("¿Quién eres?").toLowerCase();
if (nombre) {
const usuarioEncontrado = usuarios.find(usuario => usuario.nombre === nombre);

if (usuarioEncontrado) {
    alert(`Hola ${usuarioEncontrado.nombre}! Bienvenido.`);
} else {
    alert("Lo siento, no te encontré en la lista de usuarios.");
}
}






const seleccionInvertir = prompt("¿En qué quieres invertir? (Plazo fijo, Dolares)").toLowerCase();




if (seleccionInvertir === "plazo fijo") {
calcularPlazoFijo();
}
if(seleccionInvertir ==="dolares" || seleccionInvertir ==="dólares"){
 convertirADolares();
}else {
alert("Su selección no existe");
}




// Simulador de Plazo fijo
function calcularPlazoFijo() {
while (true) {
const cantidadInvertir = Number(prompt("Ingrese la cantidad que desea poner en plazo fijo"));
const plazo = Number(prompt("Ingrese los meses que desea poner el plazo fijo entre 1 y 12 meses"));

if (plazo <= 0 || plazo >= 13) {
  alert("Plazo ingresado fuera de los límites");
  continue;
}
const interesMensual = 8 / 100;
const resultado = cantidadInvertir + interesMensual * cantidadInvertir * plazo;
alert(`Cantidad a obtener con intereses: ${resultado}`);
const repetir = prompt("¿Desea calcular otro plazo fijo? (Sí/No)").toLowerCase();
if (repetir !== "sí" && repetir !== "si") {
  break;
}
}
}


//Compra de Dolares
function convertirADolares(){
    const tasaDeCambio = 1000;
    const cantidadMonedaLocal = Number(prompt("Ingrese la cantidad de dinero que desea convertir a dólares:"));
    const cantidadDolares = cantidadMonedaLocal / tasaDeCambio;
    alert(`Usted compró ${cantidadDolares.toFixed(2)} dólares.`);
};
