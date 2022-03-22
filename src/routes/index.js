import express from 'express'
import RegisterUser from '../controllers/registerUser.js'
import LoginUser from '../controllers/loginUser.js'
import CreateProposition from '../controllers/createProposition.js'
import CreateRequest from '../controllers/createRequest.js'
import GetAllRequests from '../controllers/getAllRequests.js'
import GetAllPropositions from '../controllers/getAllPropositions.js'
import GetUserRequests from '../controllers/getUserRequests.js'
import GetUserPropositions from '../controllers/getUserPropositions.js'
import AddImage from '../controllers/addImage.js'
import GetUserDatas from '../controllers/getUserDatas.js'
const router = express.Router()

// const apiAuth = (req, res, next) => {
//   try {
//     const token = req.headers.authorization.split(' ')[1];
//     const decodedToken = jwt.verify(token, process.env.JWT_KEY);
//     const userId = decodedToken.userId;
//     if (req.body.userId && req.body.userId !== userId) {
//       throw 'Invalid user ID';
//     } else {
//       next();
//     }
//   } catch {
//     res.status(401).json({
//       success: false, message : "Invalied auth"
//     });
//   }
// };

// router.use(apiAuth)



router.get('/', (req, res) => {
    res.json({test : "test"})
})

router.post('/api/add-user', async (req, res) => {
    const registerUser = new RegisterUser().registerUser(req, res)
})

router.post('/api/login-user', async (req, res) => {
    const loginUser = new LoginUser().loginUser(req, res)
})

router.post('/api/create-proposition', async (req, res ) => {
    const createProposition = new CreateProposition().createProposition(req, res)
})

router.post('/api/create-request', async (req, res ) => {
    const createRequest = new CreateRequest().createRequest(req, res)
})

router.get('/api/get-all-requests', async (req, res) => {
    const getAllRequests = new GetAllRequests().getAllRequests(req, res)
})

router.get('/api/get-all-propositions', async (req, res) => {
    const getAllPropositions = new GetAllPropositions().getAllPropositions(req, res)
})

router.get('/api/get-requests/:userId', async (req, res) => {
    const getUserRequests = new GetUserRequests().getUserRequests(req, res)
})

router.get('/api/get-propositions/:userId', async (req, res) => {
    const getUserPropositions = new GetUserPropositions().getUserPropositions(req, res)
})

router.post('/api/add-image', async (req, res) => {
    const addImage = new AddImage().addImage(req, res)
})

router.post('/api/me', async(req, res) => {
    const getUserDatas = new GetUserDatas().getUserDatas(req, res)
})

export default router