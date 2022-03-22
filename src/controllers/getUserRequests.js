import User from "../models/User.js";

class GetUserRequests  {

    getUserRequests = async (request, response) => {
        const {userId } = request.params
        if(!userId) {
            return response.status(401).json({success : false, message : "Something wrong with the request"})
        }

        let user

        try{
            user = await User.findOne({where : { id : userId }})
        }
        catch (error){
            return response.status(401).json({success : false, message : error})   
        }


        if(!user) 
            return response.status(401).json({success : false, message : "No user found"})


        if(!user.dataValues.isRefugee) 
            return response.status(401).json({success : false, message : "User is not a refugee"})


        try{
            const userRequests = await user.getRefugeerequests()
            console.log(userRequests)
            return response.status(200).json({success : true, message : "User requests", data : userRequests})
            
        }
        catch (error){
            console.log(error)
            return response.status(401).json({success : false, message : error})
        }
    }

}

export default GetUserRequests