import sequelize from "../utils/db.js";
import Sequelize from 'sequelize'

const HostProposition = sequelize.define("hostProposition", {
    id : {
        type : Sequelize.INTEGER(11),
        autoIncrement : true,
        allowNull : false,
        primaryKey : true
    },
    country : {
        type : Sequelize.STRING,
        allowNull : false
    },
    city : {
        type : Sequelize.STRING,
        allowNull : false
    },
    hostCapcity : {
        type : Sequelize.INTEGER,
        allowNull : false
    },
    description : {
        type : Sequelize.STRING,
        allowNull : false
    }

})

export default HostProposition