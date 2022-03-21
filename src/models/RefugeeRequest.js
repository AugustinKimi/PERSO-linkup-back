import sequelize from "../utils/db.js";
import Sequelize from 'sequelize'

const RefugeeRequest = sequelize.define("refugeeRequest", {
    id : {
        type : Sequelize.INTEGER(11),
        autoIncrement : true,
        allowNull : false,
        primaryKey : true
    },
    nativeCountry : {
        type : Sequelize.STRING,
        allowNull : false
    },
    description : {
        type : Sequelize.STRING,
        allowNull : false
    },
    totalRefugee : {
        type : Sequelize.INTEGER,
        allowNull : false
    },
    childrens : {
        type : Sequelize.INTEGER,
        allowNull : false
    }

})

export default RefugeeRequest