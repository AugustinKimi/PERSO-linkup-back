import sequelize from "../utils/db.js";
import Sequelize from 'sequelize'

const HostUser = sequelize.define("hostUser", {
    id : {
        type : Sequelize.INTEGER(11),
        autoIncrement : true,
        allowNull : false,
        primaryKey : true
    },
    name : {
        type : Sequelize.STRING,
        allowNull : false
    },
    lastName : {
        type : Sequelize.STRING,
        allowNull : false
    },
    email : {
        type : Sequelize.STRING,
        allowNull : false,
        unique : true
    },
    password : {
        type : Sequelize.STRING,
        allowNull : false
    },
    verifyKey : {
        type : Sequelize.STRING,
        allowNull : false,
        unique : true
    },
    isHost : {
        type : Sequelize.BOOLEAN,
        allowNull : false
    }

})

export default HostUser