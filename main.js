//Simulador de Plazo fijo
let cantidadInvertir = Number(prompt("Ingrese la cantidad que desea poner en plazo fijo"));
let plazo = Number(prompt("Ingrese los meses que desea poner el plazo fijo entre 1 y 12 meses"));
const interesMensual = 8;
let resultado = 0;



if(plazo <= 0 || plazo >=13){
    alert("Plazo ingresado fuera de los limites");
    }

while(plazo > 0 && plazo <=12){
    resultado = cantidadInvertir + interesMensual/100*cantidadInvertir * plazo;
    alert("Cantidad a obtener con intereses" + " " + resultado);
    break; 
}

