document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const endereco = document.getElementById('endereco').value;
    const cidade = document.getElementById('cidade').value;
    const estado = document.getElementById('estado').value;
    
    if (nome && email && senha && endereco && cidade && estado) {
        alert('Cadastro realizado com sucesso!');
        window.location.href = 'pgn_verificaçao.html';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});