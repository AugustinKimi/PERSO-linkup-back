import User from "../models/User.js";

class CreateProposition  {

    createProposition = async (request, response) => {
        // Check if the request is complete
        const {userId, country, city, hostCapacity, description} = request.body
        if(!userId || !country || !city || !hostCapacity || !description) {
            response.status(401).json({success : false, message : "Something wen wrong with the request"})
            return
        }

        // Get the user and check if he exist
        let user 
        try{
            user = await User.findOne({where : {id : userId}})   
        }
        catch(error){
            response.status(401).json({success : false, message : error})
            return
        }

        if(!user) {
            response.status(401).json({success : false, message : "No user found"})
            return
        }
        if(!user.dataValues.isHost) {
            response.status(401).json({success : false, message : "User is not a host"})
            return
        }
        // Create the proposition
        const inserts = {
            country,
            city,
            hostCapacity,
            description
        }
        try{
            const proposition = await user.createHostproposition(inserts)
            response.status(200).json({success : true, message : "Proposition created"})
            return
        }
        catch (error){
            console.log(error)
            response.status(401).json({success : false, message : error})
            return
        }
    }

}

export default CreateProposition