const Sequelize = require("./database");

const Games =  Sequelize.define("Games", {
    id:{
        type: Sequelize.NUMBER,
        unique: true
    },
    titulo : {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao : {
        type: Sequelize.STRING,
        allowNull: false
    },
    num_jogadores_recomendados : {
        type: Sequelize.NUMBER,
        allowNull: false
    },
    faixa_etaria : {
        type: Sequelize.NUMBER,
        allowNull: false
    }

})

module.exports = Games