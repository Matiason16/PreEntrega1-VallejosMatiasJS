/*const usuarios = [
    { nombre: 'juan', edad: 25 }
];

function mostrarUsuarios() {
    usuarios.forEach(usuario => {
        alert(`Usuario: ${usuario.nombre} Edad: ${usuario.edad}`);
    });
}


function buscarUsuario(nombre) {
    return usuarios.find(usuario => usuario.nombre === nombre);
}

function saludarUsuario() {
    let usuarioEncontrado = null;
    while (!usuarioEncontrado) { 
        const nombre = prompt("¿Quién eres?(Juan)"); 
        if (nombre === null) { 
            return;
        }
        const nombreLowerCase = nombre.toLowerCase();
        usuarioEncontrado = buscarUsuario(nombreLowerCase);
        if (!usuarioEncontrado) { 
            alert("Lo siento, no te encontré en la lista de usuarios. Por favor, inténtalo de nuevo.");
        }
    }
    alert(`Hola ${usuarioEncontrado.nombre}! Bienvenido.`);
}
function seleccionarInversion() {
    const seleccionInvertir = prompt("¿En qué quieres invertir? (Plazo fijo, Dolares)").toLowerCase();
    if (seleccionInvertir === "plazo fijo") {
        calcularPlazoFijo();
    } else if (seleccionInvertir === "dolares" || seleccionInvertir === "dólares") {
        convertirADolares();
    } else {
        alert("Su selección no existe");
    }
}

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

function convertirADolares() {
    const tasaDeCambio = 1000;
    const cantidadMonedaLocal = Number(prompt("Ingrese la cantidad de dinero que desea convertir a dólares:"));
    const cantidadDolares = cantidadMonedaLocal / tasaDeCambio;
    alert(`Usted compró ${cantidadDolares.toFixed(2)} dólares.`);
}

mostrarUsuarios();
saludarUsuario();
seleccionarInversion();
*/



document.addEventListener("DOMContentLoaded", function() {
    var carrito = document.getElementById("carrito");
  
    // Verificar si hay productos en el carrito al cargar la página
    if (carrito.children.length === 0) {
      var textoCarritoVacio = document.createTextNode("No hay productos en el carrito.");
      carrito.appendChild(textoCarritoVacio);
    } else {
      // Si hay productos en el carrito, cargarlos desde localStorage
      cargarProductosDelLocalStorage();
    }
  });
  
  function agregarAlCarrito(nombre, precio) {
    var carrito = document.getElementById("carrito");
  
    // Eliminar el texto de "No hay productos en el carrito"
    if (carrito.children.length === 1) {
      carrito.removeChild(carrito.firstChild);
    }
    if (carrito.children.length === 1) {
        carrito.removeChild(carrito.firstChild);
      }
    
  
    var producto = document.createElement("div");
    producto.classList.add("producto-en-carrito");
    producto.innerHTML = `
      <p>${nombre} - $${precio}</p>
      <button onclick="eliminarDelCarrito(this)">Eliminar</button>
    `;
    carrito.appendChild(producto);
  
    // Calcular el total del carrito después de agregar el producto
    calcularTotal();
  
    // Guardar los productos del carrito en localStorage
    guardarProductosEnLocalStorage();
  }
  
  function eliminarDelCarrito(boton) {
    var producto = boton.parentElement;
    producto.remove();
  
    var carrito = document.getElementById("carrito");
  
    // Verificar si quedan productos en el carrito después de eliminar uno
    if (carrito.children.length === 0) {
      var textoCarritoVacio = document.createTextNode("No hay productos en el carrito.");
      carrito.appendChild(textoCarritoVacio);
    }
  
    // Calcular el total del carrito después de eliminar el producto
    calcularTotal();
  
    // Guardar los productos del carrito en localStorage
    guardarProductosEnLocalStorage();
  }
  
  function calcularTotal() {
    var productosEnCarrito = document.getElementsByClassName("producto-en-carrito");
    var total = 0;
  
    for (var i = 0; i < productosEnCarrito.length; i++) {
      var precioProducto = parseFloat(productosEnCarrito[i].querySelector("p").textContent.split("$")[1]);
      total += precioProducto;
    }
  
    // Mostrar el total del carrito
    var totalElement = document.getElementById("total");
    if (totalElement) {
      totalElement.textContent = "Total: $" + total.toFixed(2);
    } else {
      totalElement = document.createElement("p");
      totalElement.id = "total";
      totalElement.textContent = "Total: $" + total.toFixed(2);
      document.getElementById("carrito").appendChild(totalElement);
    }
  }
  
  function guardarProductosEnLocalStorage() {
    var productosEnCarrito = document.getElementsByClassName("producto-en-carrito");
    var productos = [];
  
    for (var i = 0; i < productosEnCarrito.length; i++) {
      var nombre = productosEnCarrito[i].querySelector("p").textContent.split(" - ")[0];
      var precio = parseFloat(productosEnCarrito[i].querySelector("p").textContent.split("$")[1]);
      productos.push({ nombre: nombre, precio: precio });
    }
  
    localStorage.setItem("productosEnCarrito", JSON.stringify(productos));
  }
  
  function cargarProductosDelLocalStorage() {
    var productosEnCarrito = JSON.parse(localStorage.getItem("productosEnCarrito"));
  
    for (var i = 0; i < productosEnCarrito.length; i++) {
      var nombre = productosEnCarrito[i].nombre;
      var precio = productosEnCarrito[i].precio;
      agregarAlCarrito(nombre, precio);
    }
  }
  