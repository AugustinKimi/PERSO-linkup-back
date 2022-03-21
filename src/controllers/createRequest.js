import User from "../models/User.js";

class CreateRequest  {

    createRequest = async (request, response) => {
        // Check if the request is complete
        const {userEmail, nativeCountry, description, adultRefugees, childrenRefugees} = request.body
        console.log(request.body)
        if(!userEmail || !nativeCountry || !description || !adultRefugees || !childrenRefugees) {
            response.status(401).json({success : false, message : "Something wen wrong with the request"})
            return
        }

        // Get the user and check if he exist
        let user 
        try{
            user = await User.findOne({where : {email : userEmail}})   
        }
        catch(error){
            response.status(401).json({success : false, message : error})
            return
        }

        if(!user.dataValues.isRefugee) {
            response.status(401).json({success : false, message : "User is not a refugee"})
            return
        }
        if(!user) {
            response.status(401).json({success : false, message : "No user found"})
            return
        }
        // Create the proposition
        const inserts = {
            nativeCountry,
            description,
            adultRefugees,
            childrenRefugees
        }
        try{
            const request = await user.createRefugeerequest(inserts)
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

export default CreateRequest