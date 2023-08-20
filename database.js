const Sequelize = require('sequelize');

// Configurações da conexão com o banco de dados
const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'lojaGames',
    username: 'postgres',
    password: 'murilo0401',

});

sequelize.sync()
    .then(() => {
        console.log('Tabelas sincronizadas com sucesso');
    })
    .catch((error) => {
        console.error('Erro ao sincronizar tabelas:', error);
    });


module.exports = sequelize;