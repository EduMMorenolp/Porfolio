document.addEventListener('DOMContentLoaded', function () {
  const tarjetaSobreMi = document.getElementById('sobre-mi');
  tarjetaSobreMi.style.display = 'block';

  const enlaces = document.querySelectorAll('.enlace');
  const tarjetas = document.querySelectorAll('.tarjeta');
  const navbarLinks = document.querySelectorAll('.navbar-links li a');

  enlaces.forEach((enlace) => {
    enlace.addEventListener('click', (event) => {
      event.preventDefault();

      const tarjetaId = event.target.getAttribute('href').substring(1);
      const tarjetaSeleccionada = document.getElementById(tarjetaId);

      tarjetas.forEach((tarjeta) => {
        if (tarjeta === tarjetaSeleccionada) {
          tarjeta.style.display = 'block';
        } else {
          tarjeta.style.display = 'none';
        }
      });
    });
  });

  navbarLinks.forEach(link => {
    link.addEventListener('mouseover', function () {
      navbarLinks.forEach(otherLink => {
        if (otherLink !== link) {
          otherLink.classList.add('blurred');
        }
      });
    });

    link.addEventListener('mouseout', function () {
      navbarLinks.forEach(otherLink => {
        if (otherLink !== link) {
          otherLink.classList.remove('blurred');
        }
      });
    });
  });
});