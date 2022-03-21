import express from 'express'
import RegisterUser from '../controllers/registerUser.js'
import LoginUser from '../controllers/loginUser.js'
import CreateProposition from '../controllers/createProposition.js'
import CreateRequest from '../controllers/createRequest.js'
const router = express.Router()

router.get('/', (req, res, next) => {
    res.json({test : "test"})
})

router.post('/api/add-user', async (req, res, next) => {
    const registerUser = new RegisterUser()
    const response = await registerUser.registerUser(req, res)
})

router.post('/api/login-user', async (req, res, next) => {
    const loginUser = new LoginUser()
    const response = await loginUser.loginUser(req, res)
})

router.post('/api/create-proposition', async (req, res, next ) => {
    const createProposition = new CreateProposition()
    const response = await createProposition.createProposition(req, res)
})

router.post('/api/create-request', async (req, res, next ) => {
    const createRequest = new CreateRequest()
    const response = await createRequest.createRequest(req, res)
})

router.post('/api/add-user-image', async (req, res, next) => {
})


export default router