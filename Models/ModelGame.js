import Sequelize from "sequelize"
import { database } from "../database/database.js"

export const Games = database.define("Games", {
    id: {
        type: Sequelize.INTEGER, 
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
        type: Sequelize.INTEGER, 
        allowNull: false
    },
    faixa_etaria: {
        type: Sequelize.INTEGER, 
        allowNull: false
    }
});
