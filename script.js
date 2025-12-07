document.addEventListener("DOMContentLoaded", () => {
  // Evento del botón oferta secreta
  const btnOferta = document.getElementById("btnOferta");
  const oferta = document.getElementById("oferta");

  btnOferta.addEventListener("click", () => {
    oferta.classList.toggle("d-none");
  });

  // Evento kawaii al comprar
  const botonesComprar = document.querySelectorAll(".btnComprar");

  botonesComprar.forEach((boton) => {
    boton.addEventListener("click", () => {
      alert("Gracias por tu compra uwu 💖🍬 ¡Vuelve pronto!");
    });
  });
});