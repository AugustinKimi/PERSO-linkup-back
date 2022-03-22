import User from "../models/User.js";
import RefugeeRequest from "../models/RefugeeRequest.js"

class GetAllRequests  {

    getAllRequests = async (request, response) => {
        try{
            const refugeeRequests = await RefugeeRequest.findAll()
            return response.status(200).json({success : true, message : "All refugee requests", data : refugeeRequests})       
        }
        catch (error){
            return response.status(401).json({success : false, message : error})
        }
    }

}

export default GetAllRequests