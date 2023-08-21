import Sequelize from "sequelize";

export const database = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'lojaGames',
    username: 'postgres',
    password: 'murilo0401',

});

database.sync()
    .then(() => {
        console.log('Tabelas sincronizadas com sucesso');
    })
    .catch((error) => {
        console.error('Erro ao sincronizar tabelas:', error);
    });
