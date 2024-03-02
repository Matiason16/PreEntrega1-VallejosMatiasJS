fetch('../datos.json')
    .then(response => response.json())
    .then(productos => {

        const contenedorProductos = document.getElementById('contenedorProductos');

      
        productos.forEach(producto => {

            const productoDiv = document.createElement('div');
            productoDiv.classList.add('productos');

            const productoHTML = `
                <div class="producto">
                    <img src="${producto.imagen}" alt="${producto.nombre}" width="300px">
                    <h3>${producto.nombre}</h3>
                    <h2>${producto.precio}</h2> 
                </div>
            `;
            productoDiv.innerHTML = productoHTML;
            contenedorProductos.appendChild(productoDiv);
        });
    })
