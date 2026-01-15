
//HEADER 
document.addEventListener("DOMContentLoaded", function () {
    const burger = document.getElementById("burger-menu");
    const mobileMenu = document.getElementById("mobile-menu");
    const header = document.querySelector("header");

    //Burguer Menu
    burger.addEventListener("click", function () {
        this.classList.toggle("active");
        mobileMenu.classList.toggle("active");
    });

    // Efecto de scroll
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
});
// SHOP TITTLE

document.addEventListener("DOMContentLoaded", () => {
    const titulo = document.querySelector('.shop__tittle');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Si el elemento entra en pantalla, añadimos la clase
                entry.target.classList.add('visible');
                //  Deja de observar:
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2 // Se activa cuando el 20% del elemento es visible
    });

    observer.observe(titulo);
});

// CARRUSEL

let index = 0;
const slides = document.querySelectorAll(".slides img");

function cambiarSlide(direccion) {
    // Quitar la clase active del slide actual
    slides[index].classList.remove("active");
    // Calcular el nuevo índice
    index = (index + direccion + slides.length) % slides.length;
    slides[index].classList.add("active");
}


// Contact Img 

const contactMap = document.getElementById("contactMap");
const contactImg = document.getElementById("contactImg");
const contactForm = document.getElementById("contactForm");
const contactBlock = document.getElementById("contactBlock");
const contactBtn = document.getElementById("contactBtn");


contactImg.addEventListener("click", function () {
    contactMap.style.display = "block";
    contactImg.style.display = "none";
    contactBlock.style.flexDirection = "column";
    contactBlock.style.alignItems = "center";
    contactForm.style.display = "none";
    contactBtn.style.display = "block";
});


contactBtn.addEventListener("click", function () {
    contactMap.style.display = "none";
    contactImg.style.display = "block";
    contactBlock.style.flexDirection = "row";
    contactBlock.style.alignItems = "center";
    contactForm.style.display = "block";
    contactBtn.style.display = "none";
});


//INTERACCION DE SECTION

//Información obtenida de tutoriales de Intersection Observer
const sectionsToUp = document.querySelectorAll('.section__up');

const observerOptions = {
    root: null, // El visor del navegador
    threshold: 0.1, // Se activa cuando asoma un 10% de la sección
    rootMargin: "0px 0px -50px 0px" // Margen para que no se active tan al borde
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Dejamos de observar para que la animación solo ocurra una vez
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

sectionsToUp.forEach(section => {
    observer.observe(section);
});




