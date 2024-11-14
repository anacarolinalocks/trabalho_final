document.addEventListener('DOMContentLoaded', () => {
    const userId = localStorage.getItem('userId'); // Use o ID do usuário logado
    const favoritosContainer = document.querySelector('.favoritos');

    fetch(`http://localhost:3003/api/favoritos/${userId}`)
        .then(response => response.json())
        .then(favoritos => {
            if (favoritos.length > 0) {
                favoritos.forEach(livro => {
                    const livroDiv = document.createElement('div');
                    livroDiv.classList.add('livro-favoritado');

                    const img = document.createElement('img');
                    img.src = livro.thumbnail;
                    img.alt = `Capa do livro ${livro.titulo}`;

                    const titulo = document.createElement('h2');
                    titulo.textContent = livro.titulo;

                    livroDiv.appendChild(img);
                    livroDiv.appendChild(titulo);
                    favoritosContainer.appendChild(livroDiv);
                });
            } else {
                favoritosContainer.textContent = 'Nenhum livro favoritado encontrado.';
            }
        })
        .catch(error => console.error('Erro ao buscar livros favoritos:', error));
});
