const Sequelize = require('sequelize');
const sequelize = require('./database'); // Substitua pelo caminho correto

const Games = sequelize.define("Games", {
    id: {
        type: Sequelize.INTEGER, // Correção: Use Sequelize.INTEGER
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false
    },
    num_jogadores_recomendados: {
        type: Sequelize.INTEGER, // Correção: Use Sequelize.INTEGER
        allowNull: false
    },
    faixa_etaria: {
        type: Sequelize.INTEGER, // Correção: Use Sequelize.INTEGER
        allowNull: false
    }
});

module.exports = Games;
