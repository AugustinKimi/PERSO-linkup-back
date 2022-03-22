import User from "../models/User.js";
import HostProposition from "../models/HostProposition.js"

class GetAllPropositions  {

    getAllPropositions = async (request, response) => {
        
        try{
            const hostProposition = await HostProposition.findAll()
            return response.status(200).json({success : true, message : "All host propositions", data : hostProposition}) 
        }
        catch (error){
            return response.status(401).json({success : false, message : error})
        }
    }

}

export default GetAllPropositions