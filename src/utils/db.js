import Sequelize from 'sequelize'
import dotenv from 'dotenv'
dotenv.config()
const sequelize = new Sequelize(process.env.MARIADB_DATABASE, process.env.MARIADB_USER, process.env.MARIADB_PASSWORD, {
    host: process.env.MARIADB_HOST,
    dialect: "mysql",
})

export default sequelize