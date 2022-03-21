import sequelize from "../utils/db.js";
import Sequelize from 'sequelize'

const PossibleCountry = sequelize.define("possiblecountry", {
    id : {
        type : Sequelize.INTEGER(11),
        autoIncrement : true,
        allowNull : false,
        primaryKey : true
    },
    countryName : {
        type : Sequelize.STRING,
        allowNull : false
    }

}, {freezeTableName: true})

export default PossibleCountry