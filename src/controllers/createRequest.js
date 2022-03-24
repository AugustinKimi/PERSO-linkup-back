import User from "../models/User.js";


class CreateRequest  {

    createRequest = async (request, response) => {
        // Check if the request is complete
        const {userId, userStatus, completFamily, nativeCountry, description, adultRefugees, childrenRefugees, possibleCountries} = request.body
        console.log(possibleCountries)
        if(!userId || !userStatus  || !completFamily  || !nativeCountry || !description || !adultRefugees || !childrenRefugees || !possibleCountries || !possibleCountries.length > 0) 
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

        if(!user.dataValues.isRefugee) 
            return response.status(401).json({success : false, message : "User is not a refugee"})


        

        // Create the proposition
        const inserts = {
            userStatus,
            completFamily,
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
            return response.status(200).json({success : true, message : "Proposition created"})
        }
        catch (error){
            console.log(error)
            return response.status(401).json({success : false, message : error})
        }
    }

}

export default CreateRequest