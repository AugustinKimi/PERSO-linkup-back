import sequelize from "../utils/db.js";
import Sequelize from 'sequelize'

const ImageUrl  = sequelize.define("imageUrl", {
    id : {
        type : Sequelize.INTEGER(11),
        autoIncrement : true,
        allowNull : false,
        primaryKey : true
    },
    imageUrl : {
        type : Sequelize.STRING,
        allowNull : false
    }

})

export default ImageUrl