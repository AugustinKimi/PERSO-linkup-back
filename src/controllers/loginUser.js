import User from "../models/User.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'



class LoginUser  {

    loginUser = async (request, response) => {
        const {email, password} = request.body
        if(!email || !password) 
            return response.status(401).json({success : false, message : "Something wrong with the request"})
        let user

        try{
            user = await User.findOne({where : { email }})
        }
        catch (error){
            return response.status(401).json({success : false, message : error})
        }

        if(!user) 
            return response.status(401).json({success : false, message : "No user found"})


        const testPassword = await bcrypt.compare(password, user.dataValues.password)
        if(!testPassword) 
            return response.status(401).json({success : false, message : "Error in credentials"})

        const token = jwt.sign({
            userId  : user.dataValues.id,
            name  : user.dataValues.name,
            lastName  : user.dataValues.lastName,
            name  : user.dataValues.name,
            isHost : user.dataValues.isHost,
            isRefugee : user.dataValues.isRefugee,
        }, process.env.JWT_KEY)


        response.status(200).json({success : true, message : "User logged", token})
    }

}

export default LoginUser