import sequelize from "../utils/db.js";
import Sequelize from 'sequelize'

const PossibleCountry = sequelize.define("possibleCountry", {
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

})

export default PossibleCountry