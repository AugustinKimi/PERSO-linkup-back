import express from 'express'
import RegisterUser from '../controllers/registerUser.js'
import LoginUser from '../controllers/loginUser.js'
import CreateProposition from '../controllers/createProposition.js'
import CreateRequest from '../controllers/createRequest.js'
import GetAllRequests from '../controllers/getAllRequests.js'
import GetAllPropositions from '../controllers/getAllPropositions.js'
import GetUserRequests from '../controllers/getUserRequests.js'
import GetUserPropositions from '../controllers/getUserPropositions.js'
const router = express.Router()

router.get('/', (req, res, next) => {
    res.json({test : "test"})
})

router.post('/api/add-user', async (req, res, next) => {
    const registerUser = new RegisterUser().registerUser(req, res)
})

router.post('/api/login-user', async (req, res, next) => {
    const loginUser = new LoginUser().loginUser(req, res)
})

router.post('/api/create-proposition', async (req, res, next ) => {
    const createProposition = new CreateProposition().createProposition(req, res)
})

router.post('/api/create-request', async (req, res, next ) => {
    const createRequest = new CreateRequest().createRequest(req, res)
})

router.get('/api/get-all-requests', async (req, res, next) => {
    const getAllRequests = new GetAllRequests().getAllRequests(req, res)
})

router.get('/api/get-all-propositions', async (req, res, next) => {
    const getAllPropositions = new GetAllPropositions().getAllPropositions(req, res)
})

router.get('/api/get-requests/:userId', async (req, res, next) => {
    const getUserRequests = new GetUserRequests().getUserRequests(req, res)
})

router.get('/api/get-propositions/:userId', async (req, res, next) => {
    const getUserPropositions = new GetUserPropositions().getUserPropositions(req, res)
})



export default router