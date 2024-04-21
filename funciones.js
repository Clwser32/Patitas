// <!-- funcion de ventana emeregente -->

    function openPopup() {
        var modal = document.getElementById("modalContainer");
        modal.style.display = "flex";
    }

    function closePopup() {
        var modal = document.getElementById("modalContainer");
        modal.style.display = "none";
    }
    // funcion para mostrar y ocultar eventos
    function toggleEventos() {
        var eventosContainer = document.getElementById("eventosContainer");
        if (eventosContainer.style.display === "none") {
          eventosContainer.style.display = "block";
        } else {
          eventosContainer.style.display = "none";
        }
      }
    // funcion para mostran nuevos contenido de el contenedor vista
    function mostrarContenido() {
    var contenidoOculto = document.querySelector('.contenidoOculto');
    if (contenidoOculto.style.display === 'none') {
        contenidoOculto.style.display = 'block';
    } else {
        contenidoOculto.style.display = 'none';
    }
}
