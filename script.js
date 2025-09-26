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

document.addEventListener('DOMContentLoaded', function() {
  const flipAnime = document.getElementById('flipAnime');
  if (flipAnime) {
    flipAnime.addEventListener('mouseover', function() {
      flipAnime.classList.add('flipped');
    });
    flipAnime.addEventListener('mouseleave', function() {
      flipAnime.classList.remove('flipped');
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const flipAnime = document.getElementById('flipAnime');
  if (flipAnime) {
    flipAnime.addEventListener('mouseover', function() {
      flipAnime.classList.add('flipped');
    });
    flipAnime.addEventListener('mouseleave', function() {
      flipAnime.classList.remove('flipped');
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const flipDisney = document.getElementById('flipDisney');
  if (flipDisney) {
    flipDisney.addEventListener('mouseover', function() {
      flipDisney.classList.add('flipped');
    });
    flipDisney.addEventListener('mouseleave', function() {
      flipDisney.classList.remove('flipped');
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const flipCelulares = document.getElementById('flipCelulares');
  if (flipCelulares) {
    flipCelulares.addEventListener('mouseover', function() {
      flipCelulares.classList.add('flipped');
    });
    flipCelulares.addEventListener('mouseleave', function() {
      flipCelulares.classList.remove('flipped');
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const flipCarteras = document.getElementById('flipCarteras');
  if (flipCarteras) {
    flipCarteras.addEventListener('mouseover', function() {
      flipCarteras.classList.add('flipped');
    });
    flipCarteras.addEventListener('mouseleave', function() {
      flipCarteras.classList.remove('flipped');
    });
  }
});


document.addEventListener('DOMContentLoaded', function() {
  const flipGamer = document.getElementById('flipGamer');
  if (flipGamer) {
    flipGamer.addEventListener('mouseover', function() {
      flipGamer.classList.add('flipped');
    });
    flipGamer.addEventListener('mouseleave', function() {
      flipGamer.classList.remove('flipped');
    });
  }
});