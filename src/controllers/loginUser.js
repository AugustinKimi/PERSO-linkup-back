import User from "../models/User.js";
import bcrypt from 'bcrypt'

class LoginUser  {

    loginUser = async (request) => {
        const {email, password} = request
        if(!email || !password) 
            return {success : false, message : "Something wrong with the request"}
        let user

        try{
            user = await User.findAll({where : { email }})
        }
        catch (error){
            // console.log(error)
            return {success : false, message : error}

        }

        if(user.length === 0) return {sucess : false, message : "No user found"}

        const testPassword = await bcrypt.compare(password, user[0].dataValues.password)
        if(!testPassword)  return {sucess : false, message : "Something went wrong"}

        const userData = {
            name : user[0].dataValues.name,
            lastName : user[0].dataValues.lastName,
            email : user[0].dataValues.email,
            isHost : user[0].dataValues.isHost,
            isRefugee : user[0].dataValues.isRefugee,
        }

        return {sucess : true, message : "User logged in", userData}
    }

}

export default LoginUser