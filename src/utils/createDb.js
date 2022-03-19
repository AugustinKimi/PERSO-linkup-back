import sequelize from "./db.js";
import User from "../models/User.js";
import HostProposition from "../models/HostProposition.js";
import RefugeeRequest from "../models/RefugeeRequest.js";
import RefugeeUser from '../models/RefugeeUser.js'
import HostUser from '../models/HostUser.js'


User.hasOne(RefugeeUser)
User.hasOne(HostUser)
HostUser.hasMany(HostProposition)
RefugeeUser.hasOne(RefugeeRequest)

sequelize
    .sync({force : true})
    .then((results) => console.log(results))
    .catch(error => console.log(error))