import User from "../models/User.js";

class CreateProposition  {

    createProposition = async (request, response) => {
        // Check if the request is complete
        const {userId, country, city, hostCapacity, description} = request.body
        if(!userId || !country || !city || !hostCapacity || !description) 
            return response.status(401).json({success : false, message : "Something wen wrong with the request"})

        // Get the user and check if he exist
        let user 
        try{
            user = await User.findOne({where : {id : userId}})   
        }
        catch(error){
            return response.status(401).json({success : false, message : error})
        }

        if(!user) 
            return response.status(401).json({success : false, message : "No user found"})

        if(!user.dataValues.isHost) 
            return response.status(401).json({success : false, message : "User is not a host"})

        // Create the proposition
        const inserts = {
            country,
            city,
            hostCapacity,
            description
        }
        try{
            const proposition = await user.createHostproposition(inserts)
            return response.status(200).json({success : true, message : "Proposition created"})
        }
        catch (error){
            console.log(error)
            return response.status(401).json({success : false, message : error})
        }
    }

}

export default CreateProposition