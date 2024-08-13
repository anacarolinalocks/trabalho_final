async function cadastrar(e) {
    e.preventDefault();
    
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;

    const data = { nome, email, senha }

    const response = await fetch("http://localhost:3000/api/cadastro", {
        method: "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(data)
    });

    const results = await response.json();

    if(results.success) {
        window.location.href = '../login/login.html'
    }
}
