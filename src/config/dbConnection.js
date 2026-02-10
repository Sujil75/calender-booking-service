const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_FILE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'mysql',/* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  logging: false,
});

const dbConnection = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync({alter: true})

        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        process.exit(1)
    }
}

module.exports = {dbConnection, sequelize}