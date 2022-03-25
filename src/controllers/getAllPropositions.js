import User from "../models/User.js";
import HostProposition from "../models/HostProposition.js"

class GetAllPropositions  {

    getAllPropositions = async (request, response) => {
        
        try{
            const hostProposition = await HostProposition.findAll()
            const propositionsArray = []
            for(const proposition of hostProposition){
                const user = await User.findOne({where : { id : proposition.userId}})
                proposition.dataValues.user =  {
                    name : user.dataValues.name,
                    lastName : user.dataValues.lastName,
                    email : user.dataValues.email,
                }
                propositionsArray.push(proposition.dataValues)
            }
            return response.status(200).json({success : true, message : "All host propositions", data : propositionsArray}) 
        }
        catch (error){
            console.log(error)
            return response.status(401).json({success : false, message : error})
        }
    }

}

export default GetAllPropositions