import sequelize from "../utils/db.js";
import Sequelize from 'sequelize'

const RefugeeUser = sequelize.define("refugeeUser", {
    id : {
        type : Sequelize.INTEGER(11),
        autoIncrement : true,
        allowNull : false,
        primaryKey : true
    }

})

export default RefugeeUser