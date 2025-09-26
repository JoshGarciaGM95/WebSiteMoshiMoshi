//
function goInit(){
  location.reload();
}

// Cargar todos los productos de todos los JSON en la carpeta data y mostrarlos en el grid de variedad
function cargarVariedadProductos() {
  // Lista de archivos JSON conocidos (puedes agregar más si tienes nuevos)
  const archivos = [
    'funcos', 'peluches', 'clasicos', 'jueguetes', 'samsung', 'iphone', 'xiaomi', 'honor',
    'gucci', 'prada', 'louis-vuitton', 'accesorios-gamer', 'figuras-gamer'
  ];
  const promesas = archivos.map(nombre => fetch(`public/data/${nombre}.json`).then(r => r.json()).catch(() => []));
  Promise.all(promesas).then(listas => {
    // Unir todos los productos en un solo array
    let productos = listas.flat();
    // Mezclar el array para mostrar variedad
    productos = productos.sort(() => Math.random() - 0.5);
    const grid = document.getElementById('gridVariedad');
    grid.innerHTML = '';
    productos.forEach(prod => {
      const card = document.createElement('div');
      card.className = 'col';
      card.innerHTML = `
        <div class="card h-100">
          <img src="${prod.imagen}" class="card-img-top producto-img" alt="${prod.titulo}">
          <div class="card-body">
            <h5 class="card-title">${prod.titulo}</h5>
            <p class="card-text">${prod.descripcion || ''}</p>
            <span class="badge bg-info">${prod.categoria || ''}</span>
            <p class="card-text fw-bold text-success">${prod.precio || ''}</p>
            <a href="#" class="btn btn-primary btn-kawaii">Compra Ahora!</a>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });
    // Evento para mostrar el modal al hacer click en la imagen
    document.querySelectorAll('.producto-img').forEach(img => {
      img.addEventListener('click', function() {
        const modalImg = document.getElementById('modalImg');
        modalImg.src = this.src;
        const modal = new bootstrap.Modal(document.getElementById('modalImagen'));
        modal.show();
      });
    });
  });
}

// Mostrar productos de variedad al hacer click en el botón de bienvenida
document.addEventListener('DOMContentLoaded', function() {
  cargarVariedadProductos();
  const btnVerProductos = document.querySelector('#welcomeSection .btn-kawaii');
  if (btnVerProductos) {
    btnVerProductos.addEventListener('click', function() {
      cargarVariedadProductos();
    });
  }
});
function cargarProductos(categoria) {
  fetch(`public/data/${categoria}.json`)
    .then(res => res.json())
    .then(productos => {
      const main = document.querySelector('main');
      main.innerHTML = '';
      if (productos.length === 0) {
        main.innerHTML = '<p>No hay productos disponibles.</p>';
        return;
      }

      // Crear campo de búsqueda
      const searchDiv = document.createElement('div');
      searchDiv.className = 'mb-4';
        searchDiv.innerHTML = `
          <input type="text" id="busquedaDescripcion" class="form-control input-kawaii" placeholder="Buscar..." style="max-width:400px; margin:auto;">
      `;
      main.appendChild(searchDiv);

      // Renderizar productos (función para reutilizar)
      function renderCards(productosFiltrados) {
        let grid = document.querySelector('.row');
        if (grid) grid.remove();
        grid = document.createElement('div');
        grid.className = 'row row-cols-1 row-cols-md-3 g-4';
        productosFiltrados.forEach(prod => {
          const card = document.createElement('div');
          card.className = 'col';
          card.innerHTML = `
            <div class="card h-100">
              <img src="${prod.imagen}" class="card-img-top producto-img" alt="${prod.titulo}">
              <div class="card-body">
                <h5 class="card-title">${prod.titulo}</h5>
                <p class="card-text">${prod.descripcion || ''}</p>
                <span class="badge bg-info">${prod.categoria || ''}</span>
                <p class="card-text fw-bold text-success">${prod.precio || ''}</p>
                <a href="#" class="btn btn-primary btn-kawaii">Compra Ahora!</a>
              </div>
            </div>
          `;
          grid.appendChild(card);
        });
        main.appendChild(grid);

        // Evento para mostrar el modal al hacer click en la imagen
        document.querySelectorAll('.producto-img').forEach(img => {
          img.addEventListener('click', function() {
            const modalImg = document.getElementById('modalImg');
            modalImg.src = this.src;
            const modal = new bootstrap.Modal(document.getElementById('modalImagen'));
            modal.show();
          });
        });
      }

      // Inicialmente mostrar todos
      renderCards(productos);

      // Evento de búsqueda
      document.getElementById('busquedaDescripcion').addEventListener('input', function(e) {
        const texto = e.target.value.toLowerCase();
        const filtrados = productos.filter(prod => (prod.descripcion || '').toLowerCase().includes(texto));
        renderCards(filtrados);
      });
    })
    .catch(() => {
      document.querySelector('main').innerHTML = '<p>Error al cargar los productos.</p>';
    });
}

// Ejemplo: conectar el evento de click del submenú Funcos

document.addEventListener('DOMContentLoaded', function() {
  const funcosMenu = Array.from(document.querySelectorAll('a.dropdown-item')).find(a => a.textContent.trim() === 'Funcos');
  if (funcosMenu) {
    funcosMenu.addEventListener('click', function(e) {
      e.preventDefault();
      cargarProductos('funcos');
    });
  }
});
