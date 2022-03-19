import sequelize from "../utils/db.js";
import Sequelize from 'sequelize'

const RefugeeRequest = sequelize.define("refugeeRequest", {
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
        allowNull : false
    },
    password : {
        type : Sequelize.STRING,
        allowNull : false
    },
    verifyKey : {
        type : Sequelize.STRING,
        allowNull : false
    }

})

export default RefugeeRequest