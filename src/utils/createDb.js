import sequelize from "./db.js";
import User from "../models/User.js";
import HostProposition from "../models/HostProposition.js";
import RefugeeRequest from "../models/RefugeeRequest.js";
import PossibleCountry from '../models/PossibleCountry.js'
import ImageUrl from "../models/ImageUrl.js";

User.hasMany(HostProposition)
HostProposition.belongsTo(User)

User.hasMany(RefugeeRequest)
RefugeeRequest.belongsTo(User)

User.hasMany(ImageUrl)
ImageUrl.belongsTo(User)

RefugeeRequest.hasMany(PossibleCountry)
PossibleCountry.belongsTo(RefugeeRequest)

sequelize
    .sync({force: true})
    .then((results) => console.log(results))
    .catch(error => {console.log(error); throw(error)})