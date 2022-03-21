import User from "../models/User.js";
import bcrypt from 'bcrypt'



class LoginUser  {

    loginUser = async (request, response) => {
        const {email, password} = request.body
        if(!email || !password) {
            response.status(401).json({success : false, message : "Something wrong with the request"})
            return
        }
        let user

        try{
            user = await User.findAll({where : { email }})
        }
        catch (error){
            response.status(401).json({success : false, message : error})
            return
        }

        if(user.length === 0) {
            response.status(401).json({success : false, message : "No user found"})
            return
        }

        const testPassword = await bcrypt.compare(password, user[0].dataValues.password)
        if(!testPassword) {
            response.status(401).json({success : false, message : "Error in credentials"})
            return
        }


        const userData = {
            name : user[0].dataValues.name,
            lastName : user[0].dataValues.lastName,
            email : user[0].dataValues.email,
            isHost : user[0].dataValues.isHost,
            isRefugee : user[0].dataValues.isRefugee,
        }

        response.status(200).json({success : true, message : "User logged"})
    }

}

export default LoginUser