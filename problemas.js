document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.btnSaibaMais').forEach(button => {
        button.addEventListener('click', () => {
            const span = button.previousElementSibling.querySelector('#mais');
            if (span) {
                if (span.style.display === 'none' || span.style.display === '') {
                    span.style.display = 'inline';
                    button.textContent = 'Ver menos'; // Altera o texto do botão
                } else {
                    span.style.display = 'none';
                    button.textContent = 'Saiba mais'; // Retorna ao texto original
                }
            }
        });
    });
});