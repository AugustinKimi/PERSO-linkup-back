import Sequelize from 'sequelize'

const sequelize = new Sequelize(process.env.MARIADB_DATABASE, process.env.USER, process.env.MARIADB_PASSWORD, {
    host: process.env.MARIADB_HOST,
    dialect: "mysql"
})

export default sequelize