import Sequelize from "sequelize";

//Configurações iniciais do Sequelize
export const database = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'lojaGames',
    username: 'postgres',
    password: 'murilo0401',

});

//Sincronizando o sequelize com as tabelas do banco de dados para possibilitar que o ORM realize as querys
database.sync()
    .then(() => {
        console.log('Tabelas sincronizadas com sucesso');
    })
    .catch((error) => {
        console.error('Erro ao sincronizar tabelas:', error);
    });
