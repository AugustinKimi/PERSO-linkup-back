import sequelize from "../utils/db.js";
import Sequelize from 'sequelize'

const RefugeeRequest = sequelize.define("refugeerequest", {
    id : {
        type : Sequelize.INTEGER(11),
        autoIncrement : true,
        allowNull : false,
        primaryKey : true
    },
    userStatus : {
        type : Sequelize.STRING,
        allowNull : false
    },
    completFamily : {
        type : Sequelize.BOOLEAN,
        allowNull : false
    },
    nativeCountry : {
        type : Sequelize.STRING,
        allowNull : false
    },
    description : {
        type : Sequelize.STRING,
        allowNull : false
    },
    adultRefugees : {
        type : Sequelize.INTEGER,
        allowNull : false
    },
    childrenRefugees : {
        type : Sequelize.INTEGER,
        allowNull : false
    }

}, {freezeTableName: true})

export default RefugeeRequest