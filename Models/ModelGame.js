import Sequelize from "sequelize"
import { database } from "../database/database.js"

//Criação da entidade Games, que será utilizada para o ORM abstrair as linhas e colunas para o banco de dados
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
