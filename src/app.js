import express from "express"
import router from "./routes/index.js"
import dotenv from 'dotenv'
import sequelize from "./utils/db.js"
import User from "./models/User.js";
import HostProposition from "./models/HostProposition.js";
import RefugeeRequest from "./models/RefugeeRequest.js";
import PossibleCountry from './models/PossibleCountry.js'
import ImageUrl from "./models/ImageUrl.js";
dotenv.config()
const app = express()
app.use(express.json())
app.use(router)

const port = process.env.APP_PORT | 8080

User.hasMany(HostProposition)
HostProposition.belongsTo(User)

User.hasMany(RefugeeRequest)
RefugeeRequest.belongsTo(User)

User.hasMany(ImageUrl)
ImageUrl.belongsTo(User)

RefugeeRequest.hasMany(PossibleCountry)
PossibleCountry.belongsTo(RefugeeRequest)


app.listen(port, () => {
    console.log(`App listening on port ${port}, go to http://localhost:${port}`)
})