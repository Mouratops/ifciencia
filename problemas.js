document.addEventListener("DOMContentLoaded", function () {
  const botoes = document.querySelectorAll(".btnSaibaMais");
  const textoMais = document.getElementById("mais");

  botoes.forEach((btn) => {
    btn.addEventListener("click", () => {
      const textoMais = btn.previousElementSibling.querySelector(".mais");

      if (textoMais.style.display === "none" || textoMais.style.display === "") {
        textoMais.style.display = "block";
        btn.textContent = "Mostrar menos";
      } else {
        textoMais.style.display = "none";
        btn.textContent = "Saiba mais";
      }
    });
  });
});

