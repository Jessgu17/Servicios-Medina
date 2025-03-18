let currentImage = 1; // Imagen inicial
const totalImages = 3; // Total de imágenes

function changeBackground(imageNumber) {
    const hero = document.getElementById('hero');
    const heroTitle = document.getElementById('hero-title');
    const heroParagraph = document.getElementById('hero-paragraph');

    switch (imageNumber) {
        case 1:
            hero.style.backgroundImage = "url('Img/Imagen1.jpg')";
            heroTitle.textContent = "¿QUIENES SOMOS?";
            heroParagraph.textContent = "Somos una empresa especializada en trabajos de llave en mano, así como relacionados al mantenimiento preventivo y correctivo, a la construcción y mejora de inmuebles. ";
            break;
        case 2:
            hero.style.backgroundImage = "url('Img/Imagen2.jpg')";
            heroTitle.textContent = "NUESTRA MISIÓN";
            heroParagraph.textContent = "Es ofrecer servicios profesionales de mantenimiento, instalación e integración de proyectos para la industria en general, proyectar, suministrar, construir y mantener instalaciones de infraestructura, entendiendo y atendiendo sus necesidades específicas, dar soluciones a nuestros clientes, procurando la mejora continua en todos los ámbitos de nuestros servicios.";
            break;
        case 3:
            hero.style.backgroundImage = "url('Img/Imagen3.jpg')";
            heroTitle.textContent = "OBJETIVOS";
            heroParagraph.textContent = "Compromiso, innovación, servicio y trabajo en equipo son los valores que rigen nuestro desempeño. Para obtener la plena satisfacción de cada cliente, nuestro propósito es, definir en forma integral las necesidades específicas de cada uno y nuestro compromiso es, proporcionarle la mejor solución técnica utilizando productos de la mejor calidad. ";
            break;
        default:
            hero.style.backgroundImage = "url('Img/Imagen1.jpg')";
            heroTitle.textContent = "¿QUIENES SOMOS?";
            heroParagraph.textContent = "Somos una empresa especializada en trabajos de llave en mano, así como relacionados al mantenimiento preventivo y correctivo, a la construcción y mejora de inmuebles. ";
    }
}

// Cambiar automáticamente la imagen, el título y el párrafo cada 3 segundos
setInterval(() => {
    currentImage = (currentImage % totalImages) + 1; // Incrementa el número de imagen y vuelve a 1 después de la última
    changeBackground(currentImage); // Cambia la imagen, el título y el párrafo
}, 3000);


document.addEventListener('DOMContentLoaded', () => {
    const servicios = document.querySelectorAll('.servi');
  
    servicios.forEach(servi => {
      servi.addEventListener('click', () => {
        servi.classList.toggle('clicked');
      });
    });
  });


