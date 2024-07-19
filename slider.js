function abrirCorreo() {
    window.location.href = 'mailto:beron361@gmail.com';
}

document.addEventListener("DOMContentLoaded", function() {
    const sliderContent = document.querySelector(".slider-content");
    const slides = document.querySelectorAll(".slide");

    let currentIndex = 0;

    document.querySelectorAll(".slider-arrow").forEach(function(arrow) {
        arrow.addEventListener("click", function() {
            if (arrow.classList.contains("bi-chevron-left")) {
                currentIndex--;
            } else if (arrow.classList.contains("bi-chevron-right")) {
                currentIndex++;
            }
            if (currentIndex === 3 ) {
                currentIndex = 0
            }
 
            currentIndex = Math.max(0, Math.min(slides.length - 1, currentIndex));


            const offset = -currentIndex * sliderContent.clientWidth;
            sliderContent.style.transform = `translateX(${offset}px)`;


            slides.forEach(function(slide, index) {
                if (index === currentIndex) {
                    slide.style.display = "block";
                } else {
                    slide.style.display = "none";
                }
            });


            const iconLenguaje1 = document.getElementById("iconLenguaje1");
            const iconLenguaje2 = document.getElementById("iconLenguaje2");
            const iconLenguaje3 = document.getElementById("iconLenguaje3");
            const iconLenguaje4 = document.getElementById("iconLenguaje4");
            const titulo = document.getElementById("titulo");

            if (currentIndex === 0) {
                titulo.innerHTML = "Habilidades";
                iconLenguaje1.style.backgroundImage = 'url(images/css.svg)';
                iconLenguaje2.style.backgroundImage = 'url(images/html5.svg)';
                iconLenguaje3.style.backgroundImage = 'url(images/javascript.svg)';
                iconLenguaje4.style.backgroundImage = 'url(images/php_dark.svg)';
                iconLenguaje2.style.width = "100px";
                iconLenguaje3.style.width = '100px';
                iconLenguaje4.style.width = '100px';
            }  if(currentIndex === 1){
                titulo.innerHTML = "Gestor de Base De Datos";
                iconLenguaje1.style.backgroundImage = 'url(images/mysql.svg)';
                iconLenguaje2.style.width = "0";
                iconLenguaje3.style.width = '0';
                iconLenguaje4.style.width = '0';
            }
                if(currentIndex === 2){
                    titulo.innerHTML = "Herramientas";
                    iconLenguaje2.style.width = "100px";
                    iconLenguaje3.style.width = '100px';
                    iconLenguaje1.style.backgroundImage = 'url(images/github-dark.svg)';
                    iconLenguaje2.style.backgroundImage = 'url(images/docker.svg)';
                    iconLenguaje3.style.backgroundImage = 'url(images/virtualbox_logo.png)';
                }
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM completamente cargado y analizado"); // Verificar que el DOM esté cargado
    const flecha = document.querySelector('.flecha');
    if (flecha) { // Verificar que el elemento SVG exista
        flecha.addEventListener('click', function() {
            console.log("holaaa"); // Registro en la consola para depuración
            document.getElementById('HabilidadesConsulta').scrollIntoView({ behavior: 'smooth' });
        });
    } else {
        console.error("No se encontró el elemento SVG con la clase 'flecha'");
    }
});

