let button = document.getElementById("botao");

button.onclick = async function () {

    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;

    let data = { email, senha};

const response = await fetch("http://localhost:3000/api/get/user", {


        method: "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(data)
    });
   
    const result = await response.json()

    console.log(result)
}

const go = document.getElementById("botao");

go.addEventListener('click', () => {
    window.location.href = "../principal/principal.html";
});
