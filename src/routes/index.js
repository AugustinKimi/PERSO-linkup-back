import express from 'express'
import RegisterUser from '../controllers/registerUser.js'
const router = express.Router()

router.get('/', (req, res, next) => {
    res.json({test : "test"})
})

router.post('/api/add-host', async (req, res, next) => {
    const {name, lastName, email, age, city, password} = req.body
    const registerUser = new RegisterUser()
    const response = await registerUser.registerUser(name, lastName, email, age, password, city)
    console.log(response)
    res.json(response)
})


export default router