import User from "../models/User.js";
import HostProposition from "../models/HostProposition.js"

class GetAllPropositions  {

    getAllPropositions = async (request, response) => {
        
        try{
            const hostProposition = await HostProposition.findAll()
            response.status(200).json({success : true, message : "All host propositions", data : hostProposition})
            return
        }
        catch (error){
            response.status(401).json({success : false, message : error})
            return

        }
    }

}

export default GetAllPropositions