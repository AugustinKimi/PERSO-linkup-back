import User from "../models/User.js";
import RefugeeRequest from "../models/RefugeeRequest.js";

class CreateRequest  {

    createRequest = async (request, response) => {
        // Check if the request is complete
        const {userId, nativeCountry, description, adultRefugees, childrenRefugees, possibleCountries} = request.body
        console.log(possibleCountries)
        if(!userId || !nativeCountry || !description || !adultRefugees || !childrenRefugees || !possibleCountries || !possibleCountries.length > 0) {
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

            for(const country of possibleCountries){
                console.log(Object.keys(request.__proto__))
                const createCountryToRequest = await request.createPossiblecountry({countryName : country})
            }
            response.status(200).json({success : true, message : "Proposition created"})
        }
        catch (error){
            console.log(error)
            response.status(401).json({success : false, message : error})
            return

        }
    }

}

export default CreateRequest