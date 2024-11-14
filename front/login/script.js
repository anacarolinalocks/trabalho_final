document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('loginButton');

    loginButton.addEventListener('click', async function () {
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;

        // Faz a requisição para verificar o login
        const response = await fetch('http://localhost:3003/api/get/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, senha }),
        });

        const result = await response.json();

        if (result.success) {
            // Salva o ID do usuário no localStorage
            localStorage.setItem('userId', result.data.id); // Presume que o ID do usuário seja retornado como result.data.id
            
            alert('Login bem-sucedido');
            window.location.href = '../principal/principal.html'; // Redireciona para a página principal
        } else {
            alert('Credenciais inválidas, tente novamente.');
        }
    });
});

const go = document.getElementById("botao");

go.addEventListener('click', () => {
    alert('login feito');
    window.location.href = "../principal/principal.html";
});
