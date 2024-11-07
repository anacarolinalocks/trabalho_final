const { Router } = require('express');
const router = Router();
const connection = require('../config/db'); // Certifique-se de que esta é a localização correta

// Rota para buscar livros favoritados por usuário
router.get('/favoritos/:id_user', (req, res) => {
    // Acessa o ID do usuário de forma segura
    const id_user = req.params.id_user; // Corrigido para acessar diretamente `req.params.id_user`
    
    console.log("Recebida requisição para favoritos do usuário:", id_user);

    const query = 'SELECT titulo, thumbnail FROM young_favoritos WHERE id_user = ?';

    connection.query(query, [id_user], (err, results) => {
        if (err) {
            console.error("Erro ao buscar favoritos:", err);
            return res.status(500).json({ success: false, message: 'Erro ao buscar favoritos' });
        }
        console.log("Resultados da consulta de favoritos:", results);
        res.json(results);
    });
});


module.exports = router;
