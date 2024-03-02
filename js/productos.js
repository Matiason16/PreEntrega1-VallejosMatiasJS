fetch('../datos.json')
.then(response => response.json())
.then(data => {
    console.log('Datos cargados:', data);
    mostrarDatos(data);
})





document.addEventListener("DOMContentLoaded", function() {
    let carrito = document.getElementById("carrito");
  

    let botonProducto = document.getElementById("botonproducto");
    botonProducto.addEventListener("click", function() {
      agregarAlCarrito("Monitor LED 24 Samsung", 215000);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Producto Agregado Al Carrito",
        showConfirmButton: false,
        timer: 1000
      });
    
    });
    let botonProducto2 = document.getElementById("botonproducto2");
    botonProducto2.addEventListener("click", function() {
      agregarAlCarrito("Producto 2", 350000);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Producto Agregado Al Carrito",
        showConfirmButton: false,
        timer: 1500
      });
    
    });

    let botonProducto3 = document.getElementById("botonproducto3");
    botonProducto3.addEventListener("click", function() {
      agregarAlCarrito("Producto 3", 200000);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Producto Agregado Al Carrito",
        showConfirmButton: false,
        timer: 1500
      });
    
    });

    let botonProducto4 = document.getElementById("botonproducto4");
    botonProducto4.addEventListener("click", function() {
      agregarAlCarrito("Producto 4", 400000);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Producto Agregado Al Carrito",
        showConfirmButton: false,
        timer: 1500
      });
    
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
      <button id="eliminar" onclick="eliminarDelCarrito(this)">Eliminar</button>
    `;
    carrito.appendChild(producto);
    // Calcular el total del carrito después de agregar el producto
    calcularTotal();
    // Guardar los productos del carrito en localStorage
    guardarProductosEnLocalStorage();
  }
  


  function eliminarDelCarrito(boton) {
    
    let producto = boton.parentElement;
    
    Swal.fire({
      title: "¿Estás seguro de eliminar el producto?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0DDC20",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Eliminar",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        producto.remove();
        calcularTotal();
        guardarProductosEnLocalStorage();
        Swal.fire({
          title: "Eliminado!",
          text: "El producto fue eliminado",
          icon: "success"
        });
      }
    });


    let carrito = document.getElementById("carrito");
  
    // Verificar si quedan productos en el carrito después de eliminar uno
    if (carrito.children.length === 0) {
      let textoCarritoVacio = document.createTextNode("No hay productos en el carrito.");
      carrito.appendChild(textoCarritoVacio);
    }
    // Calcular el total del carrito después de eliminar el producto
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
  





// Seleccionamos el botón y el div del carrito
const botonMostrarCarrito = document.getElementById('mostrarCarritoBtn');
const carrito = document.getElementById('carrito');

// Agregamos un event listener para el clic en el botón
botonMostrarCarrito.addEventListener('click', () => {
  // Cambiamos el estilo de visualización del carrito
  if (carrito.style.display === 'none') {
    carrito.style.display = 'block';
  } else {
    carrito.style.display = 'none';
  }
});




