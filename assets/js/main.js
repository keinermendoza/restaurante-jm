const SLIDER_DURATION = 5;
window.addEventListener("load", () => {
    startAutoSlide();
 });
 
 function startAutoSlide() {
    setInterval(() => {
       changeSlide(getActiveItemIndex() + 1);
    }, SLIDER_DURATION * 1000); // Velocidad de cambio de imagen
 }
 
 function changeSlide(toIndex) {
    const itemsArray = Array.from(document.querySelectorAll(".carousel-item"));
    const activeItem = document.querySelector(".carousel-item-active");
 
    // Verifica si toIndex excede el número de elementos
    if (toIndex >= itemsArray.length) {
       toIndex = 0;
    }
 
    const nextItem = itemsArray[toIndex];
 
    // Inicia la transición de opacidad
    nextItem.classList.add("carousel-item-next-position");
    setTimeout(() => {
       nextItem.classList.add("carousel-item-next");
       activeItem.classList.add("carousel-item-next");
    }, 20);
 
    // Al finalizar la transición, elimina las clases antiguas y asigna la nueva
    nextItem.addEventListener("transitionend", () => {
       activeItem.className = "carousel-item"; // Elimina la clase active de la imagen anterior
       nextItem.className = "carousel-item carousel-item-active"; // Nueva imagen activa
    }, { once: true });
 }
 
 function getActiveItemIndex() {
    const itemsArray = Array.from(document.querySelectorAll(".carousel-item"));
    const activeItem = document.querySelector(".carousel-item-active");
    return itemsArray.indexOf(activeItem);
 }