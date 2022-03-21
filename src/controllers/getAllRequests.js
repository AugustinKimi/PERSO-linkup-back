import User from "../models/User.js";
import RefugeeRequest from "../models/RefugeeRequest.js"

class GetAllRequests  {

    getAllRequests = async (request, response) => {
        try{
            const refugeeRequests = await RefugeeRequest.findAll()
            response.status(200).json({success : true, message : "All refugee requests", data : refugeeRequests})
            return
        }
        catch (error){
            response.status(401).json({success : false, message : error})
            return

        }
    }

}

export default GetAllRequests