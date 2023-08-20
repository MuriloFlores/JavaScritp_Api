const express = require('express');
const bodyParser = require('body-parser');
const Games = require('./models');
const app = express();

app.use(bodyParser.json());

// Rotas
app.get('/', (req, res) => {
  res.send('API para Gestão de Jogos de Tabuleiro');
});

// Exemplo de rota para buscar todos os jogos
app.get('/games/get', async (req, res) => {
    try {
        const games = await Games.findAll();
        res.json(games) 
    } catch (err) {
        console.log('Erro ao buscar usuário:', err);
        res.status(500).send("Erro ao buscar usuarios")
    }
})

// Inicialização do servidor
app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});