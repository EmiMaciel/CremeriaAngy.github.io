// Función para mostrar/ocultar la sección de Dirección
function toggleDireccion() {
    const direccionSection = document.getElementById('direccion-section');
    const promocionesSection = document.getElementById('promociones-section');
    const contactoSection = document.getElementById('contacto-section');

    // Si la sección está oculta, la mostramos
    direccionSection.style.display = direccionSection.style.display === "none" || direccionSection.style.display === "" ? "block" : "none";
    promocionesSection.style.display = "none";  // Ocultar promociones
    contactoSection.style.display = "none";     // Ocultar contacto
}

// Función para mostrar/ocultar la sección de Promociones
function togglePromociones() {
    const direccionSection = document.getElementById('direccion-section');
    const promocionesSection = document.getElementById('promociones-section');
    const contactoSection = document.getElementById('contacto-section');

    // Si la sección está oculta, la mostramos
    promocionesSection.style.display = promocionesSection.style.display === "none" || promocionesSection.style.display === "" ? "block" : "none";
    direccionSection.style.display = "none";  // Ocultar dirección
    contactoSection.style.display = "none";   // Ocultar contacto
}

// Función para mostrar/ocultar la sección de Contacto
function toggleContacto() {
    const direccionSection = document.getElementById('direccion-section');
    const promocionesSection = document.getElementById('promociones-section');
    const contactoSection = document.getElementById('contacto-section');

    // Si la sección está oculta, la mostramos
    contactoSection.style.display = contactoSection.style.display === "none" || contactoSection.style.display === "" ? "block" : "none";
    direccionSection.style.display = "none";  // Ocultar dirección
    promocionesSection.style.display = "none";  // Ocultar promociones
}



