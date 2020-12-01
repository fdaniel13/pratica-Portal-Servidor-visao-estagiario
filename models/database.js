const Sequelize = require('sequelize');
const databaseConfig = require(__dirname+'/configDatabase.js'); 

//conexao
const conn = new Sequelize(databaseConfig.databaseName,'postgres',databaseConfig.password,{
    host: 'localhost',
    dialect: 'postgres'
});


module.exports = conn;

