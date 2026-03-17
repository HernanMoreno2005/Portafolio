function abrirCorreo() {
    window.location.href = 'mailto:beron361@gmail.com';
}

document.addEventListener("DOMContentLoaded", function () {
    const imagenes = [
        'images/css.svg',
        'images/html5.svg',
        'images/javascript.svg',
        'images/php_dark.svg',
        'images/mysql.svg',
        'images/github-dark.svg',
        'images/git-icon-logo.svg',
        'images/Virtualbox_logo.png'
    ];

    imagenes.forEach(src => {
        const img = new Image();
        img.src = src;
    });

    let currentIndex = 0;
    document.querySelectorAll(".slider-arrow").forEach(function (arrow) {
        arrow.addEventListener("click", function () {

            if (arrow.classList.contains("bi-chevron-left")) {
                currentIndex--;
            } else {
                currentIndex++;
            }

            if (currentIndex < 0) currentIndex = 2;
            if (currentIndex > 2) currentIndex = 0;

            actualizarContenido(currentIndex);
        });
    });

    function actualizarContenido(index) {
        const iconLenguaje1 = document.getElementById("iconLenguaje1");
        const iconLenguaje2 = document.getElementById("iconLenguaje2");
        const iconLenguaje3 = document.getElementById("iconLenguaje3");
        const iconLenguaje4 = document.getElementById("iconLenguaje4");
        const titulo = document.getElementById("titulo");
        const logos = document.getElementById("logos");
        const iconos = [iconLenguaje1, iconLenguaje2, iconLenguaje3, iconLenguaje4];
        logos.style.opacity = "0";
        logos.style.transform = "translateY(20px)";

        setTimeout(() => {

            iconos.forEach(icon => {
                icon.style.display = "block";
                icon.src = "";
            });

            if (index === 0) {
                titulo.innerHTML = "Habilidades";

                iconLenguaje1.src = "images/css.svg";
                iconLenguaje2.src = "images/html5.svg";
                iconLenguaje3.src = "images/javascript.svg";
                iconLenguaje4.src = "images/php_dark.svg";
            }

            if (index === 1) {
                titulo.innerHTML = "Gestor de Base De Datos";

                iconLenguaje1.src = "images/mysql.svg";

                iconLenguaje2.style.display = "none";
                iconLenguaje3.style.display = "none";
                iconLenguaje4.style.display = "none";
            }

            if (index === 2) {
                titulo.innerHTML = "Herramientas";

                iconLenguaje1.src = "images/github-dark.svg";
                iconLenguaje2.src = "images/git-icon-logo.svg";
                iconLenguaje3.src = "images/Virtualbox_logo.png";

                iconLenguaje4.style.display = "none";
            }

            logos.style.opacity = "1";
            logos.style.transform = "translateY(0)";

        }, 200);
    }

    const flecha = document.querySelector('.flecha');

    if (flecha) {
        flecha.addEventListener('click', function () {
            const target = document.getElementById('HabilidadesConsulta');
            const inicio = window.scrollY;
            const final = target.getBoundingClientRect().top + window.scrollY;
            const distancia = final - inicio;
            const duracion = 600;
            let tiempoDeInicio = null;

            function animacionScroll(tiempoActual) {
                if (!tiempoDeInicio) tiempoDeInicio = tiempoActual;

                const tiempoPasado = tiempoActual - tiempoDeInicio;
                const progreso = Math.min(tiempoPasado / duracion, 1);

                window.scrollTo(0, inicio + distancia * progreso);

                if (tiempoPasado < duracion) {
                    requestAnimationFrame(animacionScroll);
                }
            }

            requestAnimationFrame(animacionScroll);
        });
    }

    actualizarContenido(0);
});

particlesJS("particles-js", {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle", stroke: { width: 0, color: "#000000" } },
        opacity: { value: 0.5 },
        size: { value: 3, random: true },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        },
        move: { enable: true, speed: 6 }
    },
    interactivity: {
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" }
        },
        modes: {
            repulse: { distance: 200 },
            push: { particles_nb: 4 }
        }
    },
    retina_detect: true
});