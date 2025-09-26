// Mostrar solo un submenú a la vez en escritorio
function setupNavbarHover() {
  if (window.matchMedia('(min-width: 992px)').matches) {
    document.querySelectorAll('.navbar-nav .dropdown').forEach(function(dropdown) {
      dropdown.addEventListener('mouseenter', function() {
        document.querySelectorAll('.navbar-nav .dropdown .dropdown-menu').forEach(function(menu) {
          menu.classList.remove('show');
        });
        var submenu = dropdown.querySelector('.dropdown-menu');
        if (submenu) submenu.classList.add('show');
      });
      dropdown.addEventListener('mouseleave', function() {
        var submenu = dropdown.querySelector('.dropdown-menu');
        if (submenu) submenu.classList.remove('show');
      });
    });
  }
}

document.addEventListener('DOMContentLoaded', setupNavbarHover);