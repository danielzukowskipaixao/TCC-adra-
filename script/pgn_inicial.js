// Obtém o modal e o texto "Fazer o login"
var modal = document.getElementById("loginModal");
var loginText = document.getElementById("login");
var closeModal = document.querySelector(".close");

// Quando clicar em "Fazer o login", mostra o modal
loginText.onclick = function() {
    modal.style.display = "flex"; // Exibe o modal
    setTimeout(() => { 
        modal.classList.add("show"); // Aplica a animação de crescimento
    }, 100);
}

// Quando clicar no botão de fechar (x), esconde o modal
closeModal.onclick = function() {
    modal.classList.remove("show"); // Remove a animação de crescimento
    setTimeout(() => {
        modal.style.display = "none"; // Esconde o modal após a animação
    }, 300);
}

// Quando clicar fora do modal, também esconde
window.onclick = function(event) {
    if (event.target == modal) {
        modal.classList.remove("show");
        setTimeout(() => {
            modal.style.display = "none";
        }, 300);
    }
}
