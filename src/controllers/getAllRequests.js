import User from "../models/User.js";
import RefugeeRequest from "../models/RefugeeRequest.js"

class GetAllRequests  {

    getAllRequests = async (request, response) => {
        try{
            const refugeeRequests = await RefugeeRequest.findAll()
            const requestsArray = []
            for(const request of refugeeRequests){
                const user = await User.findOne({where : { id : request.userId}})
                request.dataValues.user = {
                    name : user.dataValues.name,
                    lastName : user.dataValues.lastName,
                    email : user.dataValues.email,
                }
                requestsArray.push(request.dataValues)
            }
            console.log(requestsArray)
            return response.status(200).json({success : true, message : "All refugee requests", data : requestsArray})       
        }
        catch (error){
            console.log(error)
            return response.status(401).json({success : false, message : error})
        }
    }

}

export default GetAllRequests