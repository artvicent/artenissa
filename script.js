const toggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");

if (toggle && sidebar) {
    toggle.addEventListener("click", () => {
        sidebar.classList.toggle("active");
    });
}

const productosSelect = document.getElementById("productos");

if (productosSelect) {
    productosSelect.addEventListener("change", function () {
        const valorSeleccionado = this.value;
        if (valorSeleccionado !== "none") {
            location.hash = valorSeleccionado;
        }
    });
}

// Delegación para zoom
document.addEventListener("click", function (e) {
    if (e.target.matches(".producto img, .fsecos img")) {
        zoomImagen(e.target);
    }
});

function zoomImagen(img) {
    img.classList.toggle("zoomed");
}
const dialog = document.querySelector('dialog');
if (typeof dialog.showModal === "function") {
  dialog.showModal();  // Esto abre el dialog como modal, activando backdrop
} else {
  alert("Tu navegador no soporta dialog modal");
}
const carousel = document.getElementById('carousel');
const images = carousel.getElementsByTagName('img');
const dotsContainer = document.getElementById('dots');
let currentIndex = 0;
let autoplayInterval = null;

function createDots() {
  for (let i = 0; i < images.length; i++) {
    const dot = document.createElement('span');
    dot.addEventListener('click', () => {
      currentIndex = i;
      updateCarousel();
      restartAutoplay();
    });
    dotsContainer.appendChild(dot);
  }
}

function updateDots() {
  const dots = dotsContainer.getElementsByTagName('span');
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove('active');
  }
  dots[currentIndex].classList.add('active');
}

function updateCarousel() {
  for (let i = 0; i < images.length; i++) {
    images[i].classList.remove('active', 'prev', 'next');
    images[i].style.transform = 'scale(0.04)';
    images[i].style.opacity = '0.3';
  }

  const prevIndex = (currentIndex - 1 + images.length) % images.length;
  const nextIndex = (currentIndex + 1) % images.length;

  images[prevIndex].classList.add('prev');
  images[nextIndex].classList.add('next');
  images[currentIndex].classList.add('active');
  images[currentIndex].style.transform = 'scale(1)';
  images[currentIndex].style.opacity = '1';

  updateDots();
}

function next() {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
}

function prev() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateCarousel();
}

function startAutoplay() {
  autoplayInterval = setInterval(() => {
    next();
  }, 4000);
}

function restartAutoplay() {
  clearInterval(autoplayInterval);
  startAutoplay();
}

createDots();
updateCarousel();
startAutoplay();