import express from 'express'
import registerHost from '../controllers/registerHost.js'
const router = express.Router()

router.get('/', (req, res, next) => {
    res.json({test : "test"})
})

router.post('/api/add-host', (req, res, next) => {
    const {name, lastName, email, age, city, password} = req.body
    registerHost(name, lastName, email, age, password, city, )
    res.json(req.body)
})

router.get("/thouinx", (req, res, next) => {
    res.json({thouinx : "Thouin"})
})

export default router