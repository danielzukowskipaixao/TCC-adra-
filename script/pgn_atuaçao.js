// Abrir o modal
const modal = document.getElementById("modal");
const addItemButton = document.querySelector(".additional-items");
const closeBtn = document.querySelector(".close-btn");
const addItemBtn = document.getElementById("add-item-btn");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");

// Adicionar item na lista quando clicar no botão "Adicionar"
addItemBtn.addEventListener("click", () => {
    const itemText = itemInput.value.trim();
    
    if (itemText) {
        // Criar item na lista dentro do modal
        const listItem = document.createElement("li");
        listItem.textContent = itemText;
        itemList.appendChild(listItem);

        // Criar item na lista na tela principal
        const addedItem = document.createElement("li");
        addedItem.textContent = itemText;
        document.getElementById("added-items-list").appendChild(addedItem);

        itemInput.value = ""; // Limpar o campo de input após adicionar
        modal.style.display = "none"; // Fechar o modal após adicionar
    }
});


const reviewItemsButton = document.getElementById("review-items-btn");
const reviewModal = document.getElementById("review-modal");
const closeReviewBtn = document.querySelector(".close-review-btn");
const reviewItemsList = document.getElementById("review-items-list");
const editOrderBtn = document.getElementById("edit-order-btn");
const sendOrderBtn = document.getElementById("send-order-btn");

// Mostrar o botão "Revisar Pedido" quando um item for adicionado
function showReviewButton() {
    if (document.querySelectorAll("#added-items-list li").length > 0) {
        reviewItemsButton.style.display = "block";
    } else {
        reviewItemsButton.style.display = "none";
    }
}

// Dentro da função que adiciona um item à lista:
document.getElementById("add-item-btn").addEventListener("click", () => {
    // Código para adicionar itens na lista
    showReviewButton(); // Chamar a função para verificar se deve exibir o botão
});

// Dentro da função que remove um item da lista:
document.getElementById("added-items-list").addEventListener("click", (event) => {
    if (event.target.classList.contains("remove-item-btn")) {
        event.target.parentElement.remove();
        showReviewButton(); // Atualizar a exibição do botão após remover
    }
});

document.getElementById("profile-btn").addEventListener("click", function() {
            document.getElementById("profile-modal").style.display = "block";
        });

        document.querySelector(".close-profile-btn").addEventListener("click", function() {
            document.getElementById("profile-modal").style.display = "none";
        });

// Exibir o modal ao clicar no botão "Adicionar Itens"
addItemButton.addEventListener("click", () => {
    modal.style.display = "flex";
});

// Fechar o modal ao clicar no "X"
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Fechar o modal ao clicar fora do conteúdo do modal
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Adicionar item na lista quando clicar no botão "Adicionar"
addItemBtn.addEventListener("click", () => {
    const itemText = itemInput.value.trim();
    
    if (itemText) {
        const listItem = document.createElement("li");
        listItem.textContent = itemText;
        itemList.appendChild(listItem);
        itemInput.value = ""; // Limpar o campo de input após adicionar
    }
});
