// Índice de la imagen actual
let indice = 1;
// Mostrar la primera imagen
mostrarImagen(indice);
// Función para cambiar de imagen
function cambiarImagen(n) {
  // Sumar o restar al índice
  indice += n;
  // Mostrar la imagen correspondiente
  mostrarImagen(indice);
}
// Función para mostrar una imagen específica
function mostrarImagen(n) {
  // Obtener el contenedor de las imágenes
  let imagenes = document.querySelector(".imagenes");
  // Obtener los puntos
  let puntos = document.querySelectorAll(".punto");
  // Si el índice es mayor que el número de imágenes, volver al principio
  if (n > puntos.length) {
    indice = 1;
  }
  // Si el índice es menor que 1, ir al final
  if (n < 1) {
    indice = puntos.length;
  }
  // Calcular el desplazamiento del contenedor de las imágenes
  let desplazamiento = -500 * (indice - 1);
  // Aplicar el desplazamiento al contenedor de las imágenes
  imagenes.style.left = desplazamiento + "px";
  // Quitar la clase activo a todos los puntos
  for (let punto of puntos) {
    punto.classList.remove("activo");
  }
  // Añadir la clase activo al punto correspondiente
  puntos[indice - 1].classList.add("activo");
}