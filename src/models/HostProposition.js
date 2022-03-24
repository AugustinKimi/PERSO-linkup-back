import sequelize from "../utils/db.js";
import Sequelize from 'sequelize'
import User from "./User.js";

const HostProposition = sequelize.define("hostproposition", {
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
    country : {
        type : Sequelize.STRING,
        allowNull : false
    },
    city : {
        type : Sequelize.STRING,
        allowNull : false
    },
    houseSize : {
        type : Sequelize.INTEGER,
        allowNull : false
    },
    bedsNumber : {
        type : Sequelize.INTEGER,
        allowNull : false,
    },
    hostCapacity : {
        type : Sequelize.INTEGER,
        allowNull : false
    },
    description : {
        type : Sequelize.STRING,
        allowNull : false
    },
}, {freezeTableName: true})

export default HostProposition