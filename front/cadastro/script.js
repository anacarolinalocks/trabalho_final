let button = document.getElementById("handleSubmit");

button.onclick = async function (event) {
    event.preventDefault(); // Impede o envio do formulário automático

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;
    let confirmarSenha = document.getElementById('confirmar_senha').value;

    // Verificar se as senhas coincidem
    if (senha !== confirmarSenha) {
        alert("As senhas não coincidem!");
        return; // Impede o envio do formulário se as senhas não coincidirem
    }

    let data = { nome, email, senha };

    try {
        const response = await fetch("http://localhost:3003/API/cadastro", {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(data)
        });

        // Verificar se o login/cadastro foi bem-sucedido
        if (response.ok) {
            alert("Cadastro realizado com sucesso!");
            window.location.href = "../login/login.html"; // Redireciona para a página de login
        } else {
            alert("Erro no cadastro. Tente novamente.");
        }
    } catch (error) {
        alert("Erro ao conectar ao servidor. Tente novamente mais tarde.");
    }
};

const next = document.getElementById("go_login");

next.addEventListener('click', () => {
    window.location.href = "../login/login.html";
});