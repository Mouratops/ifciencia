document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("btnSaibaMais");
    const textoMais = document.getElementById("mais");
  
    btn.addEventListener("click", () => {
      if (textoMais.style.display === "none" || textoMais.style.display === "") {
        textoMais.style.display = "block"; 
        btn.textContent = "Mostrar menos";
      } else {
        textoMais.style.display = "none";
        btn.textContent = "Saiba mais";
      }
    });
  });