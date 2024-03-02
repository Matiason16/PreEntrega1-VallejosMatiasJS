
 fetch('../datos.json')
    .then(response => response.json())
    .then(data => {
        console.log('Datos cargados:', data);
        mostrarDatos(data);
    })
    .catch(error => {
        console.error('Error al cargar los datos:', error);
    });



function mostrarDatos(data) {
    const datosContainer = document.getElementById('container');
    datosContainer.innerHTML = `
    <div class="productos">
    <div class="producto">
      <img src="../multi/monitor.jpg" alt="Monitor" width="300px">
      <h3> ${data.nombre}</h3>
      <h2>${data.precio}</h2>
      <button id="botonproducto" class="buton">Agregar al Carrito</button>
    </div>
    
      
    `;
}
