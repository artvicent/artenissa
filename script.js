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