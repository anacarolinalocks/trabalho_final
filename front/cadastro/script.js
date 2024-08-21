let button = document.getElementById("handleSubmit");

button.onclick = async function () {

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;

    let data = { nome, email, senha};

    const response = await fetch("http://localhost:3000/API/cadastro", {
        method: "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(data)
    });
}

const next = document.getElementById("go_login");

next.addEventListener('click', () => {
    window.location.href = "../login/login.html";
});

const go = document.getElementById("handleSubmit");

go.addEventListener('click', () => {
    window.location.href = "../login/login.html";
});


