


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
  