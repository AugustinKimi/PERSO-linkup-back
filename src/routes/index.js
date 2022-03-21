import express from 'express'
import RegisterUser from '../controllers/registerUser.js'
import LoginUser from '../controllers/loginUser.js'
const router = express.Router()

router.get('/', (req, res, next) => {
    res.json({test : "test"})
})

router.post('/api/add-user', async (req, res, next) => {
    const registerUser = new RegisterUser()
    const response = await registerUser.registerUser(req.body)
    res.json(response)
})

router.post('/api/login-user', async (req, res, next) => {
    const loginUser = new LoginUser()
    const response = await loginUser.loginUser(req.body)
    res.json(response)
})

router.post('/api/create-host-proposition', async (req, res, next ) => {
    res.json({proposition : 'Propotion added'})
})

router.post('/api/create-refugee-request', async (req, res, next ) => {
    res.json({request : 'Propotion added'})
})

router.post('/api/add-user-image', async (req, res, next) => {
    res.json({image : "Add image"})
})


export default router