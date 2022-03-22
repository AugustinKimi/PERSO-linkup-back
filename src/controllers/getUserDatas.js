import User from "../models/User.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'



class GetUserDatas  {

    getUserDatas = async (request, response) => {
        const {userId} = request.body
        if(!userId) 
            return response.status(401).json({success : false, message : "Something wrong with the request"})
        let user

        try{
            user = await User.findOne({where : { id : userId }})
        }
        catch (error){
            return response.status(401).json({success : false, message : error})
        }

        if(!user) 
            return response.status(401).json({success : false, message : "No user found"})

        const userData = {
            userId : user.dataValues.id,
            name : user.dataValues.name,
            lastName : user.dataValues.lastName,
            email : user.dataValues.email,
            isHost : user.dataValues.isHost,
            isRefugee : user.dataValues.isRefugee,
        }

        response.status(200).json({success : true, message : "Get user datas", userData})
    }

}

export default GetUserDatas