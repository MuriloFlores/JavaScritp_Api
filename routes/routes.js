import express from 'express'
import bodyParser from 'body-parser';
import { Games } from '../Models/ModelGame.js';

const app = express();
const PORT = process.env.PORT || 3000;

export function HandleRequest() {
    app.use(bodyParser.json());

    app.get('/', (req, res) => {
        res.send('API para Gestão de Jogos de Tabuleiro');
    });

    app.post('/games/create/:titulo/:descricao/:num_jogadores_recomendados/:faixa_etaria', async (req, res) => {

        try {
            const gameTitulo = req.params.titulo
            const gameDescricao = req.params.descricao
            const gameJogadores = req.params.num_jogadores_recomendados
            const gameFaixaEtaria = req.params.faixa_etaria

            const novoJogo = await Games.create({
                titulo: gameTitulo,
                descricao: gameDescricao,
                num_jogadores_recomendados: gameJogadores,
                faixa_etaria: gameFaixaEtaria
            })
            res.json(novoJogo)
        } catch (err) {
            console.log('Erro ao criar jogo: ', err)
            res.status(500).send("erro ao criar jogo")
        }

    })

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
}