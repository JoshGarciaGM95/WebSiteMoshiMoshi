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
      const grid = document.createElement('div');
      grid.className = 'row row-cols-1 row-cols-md-3 g-4';
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
            </div>
          </div>
        `;
        grid.appendChild(card);
      });
      main.appendChild(grid);

      // Agregar evento para mostrar el modal al hacer click en la imagen
      document.querySelectorAll('.producto-img').forEach(img => {
        img.addEventListener('click', function() {
          const modalImg = document.getElementById('modalImg');
          modalImg.src = this.src;
          const modal = new bootstrap.Modal(document.getElementById('modalImagen'));
          modal.show();
        });
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
