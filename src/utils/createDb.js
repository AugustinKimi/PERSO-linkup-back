import sequelize from "./db.js";
import User from "../models/User.js";
import HostProposition from "../models/HostProposition.js";
import RefugeeRequest from "../models/RefugeeRequest.js";
import PossibleCountry from '../models/PossibleCountry.js'
import ImageUrl from "../models/ImageUrl.js";



User.hasMany(HostProposition)
User.hasMany(RefugeeRequest)
User.hasMany(ImageUrl)
RefugeeRequest.hasMany(PossibleCountry)

sequelize
    .sync()
    .then((results) => console.log(results))
    .catch(error => {console.log(error); throw(error)})