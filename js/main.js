
document.addEventListener("DOMContentLoaded", function() {
    let carrito = document.getElementById("carrito");
  

    let botonProducto = document.getElementById("botonproducto");
    botonProducto.addEventListener("click", function() {
      agregarAlCarrito("Producto 1", 215000);
    });


    
    // Verificar si hay productos en el carrito al cargar la página
    if (carrito.children.length === 0) {
      let textoCarritoVacio = document.createTextNode("No hay productos en el carrito.");
      carrito.appendChild(textoCarritoVacio);
    } else {
      // Si hay productos en el carrito, cargarlos desde localStorage
      cargarProductosDelLocalStorage();
    }
  });
  
  function agregarAlCarrito(nombre, precio) {
    let carrito = document.getElementById("carrito");
  
    // Eliminar el texto de "No hay productos en el carrito"
    if (carrito.children.length === 1) {
      carrito.removeChild(carrito.firstChild);
    }
    if (carrito.children.length === 1) {
        carrito.removeChild(carrito.firstChild);
      }
    
  
    let producto = document.createElement("div");
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
    let producto = boton.parentElement;
    producto.remove();
  
    let carrito = document.getElementById("carrito");
  
    // Verificar si quedan productos en el carrito después de eliminar uno
    if (carrito.children.length === 0) {
      let textoCarritoVacio = document.createTextNode("No hay productos en el carrito.");
      carrito.appendChild(textoCarritoVacio);
    }
  
    // Calcular el total del carrito después de eliminar el producto
    calcularTotal();
  
    // Guardar los productos del carrito en localStorage
    guardarProductosEnLocalStorage();
  }
  
  function calcularTotal() {
    let productosEnCarrito = document.getElementsByClassName("producto-en-carrito");
    let total = 0;
  
    for (let i = 0; i < productosEnCarrito.length; i++) {
      let precioProducto = parseFloat(productosEnCarrito[i].querySelector("p").textContent.split("$")[1]);
      total += precioProducto;
    }
  
    // Mostrar el total del carrito
    let totalElement = document.getElementById("total");
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
    let productosEnCarrito = document.getElementsByClassName("producto-en-carrito");
    let productos = [];
  
    for (let i = 0; i < productosEnCarrito.length; i++) {
      let nombre = productosEnCarrito[i].querySelector("p").textContent.split(" - ")[0];
      let precio = parseFloat(productosEnCarrito[i].querySelector("p").textContent.split("$")[1]);
      productos.push({ nombre: nombre, precio: precio });
    }
  
    localStorage.setItem("productosEnCarrito", JSON.stringify(productos));
  }
  
  function cargarProductosDelLocalStorage() {
    let productosEnCarrito = JSON.parse(localStorage.getItem("productosEnCarrito"));
  
    for (let i = 0; i < productosEnCarrito.length; i++) {
      let nombre = productosEnCarrito[i].nombre;
      let precio = productosEnCarrito[i].precio;
      agregarAlCarrito(nombre, precio);
    }
  }
  