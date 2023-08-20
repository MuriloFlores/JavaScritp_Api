const Sequelize = require('sequelize');

// Configurações da conexão com o banco de dados
const sequelize = new Sequelize({
    dialect: 'mssql',
    host: '192.168.3.15',
    port: 1433,
    database: 'avaliacao',
    username: 'avaliacao',
    password: '055369',
    dialectOptions: {
        options: {
            encrypt: true, // Caso esteja usando conexão criptografada
        },
    },
});



module.exports = sequelize;