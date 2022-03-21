import User from "../models/User.js";
import HostProposition from "../models/HostProposition.js";

class CreateProposition  {

    createProposition = async (request) => {
        // Check if the request is complete
        const {userEmail, country, city, hostCapacity, description} = request
        if(!userEmail || !country || !city || !hostCapacity || !description) 
            return {success : false, message : "Something wrong with the request"}

        // Get the user and check if he exist
        let user 
        try{
            user = await User.findOne({where : {email : userEmail}})   
        }
        catch(error){
            return {success : false, message : "Soemthing went wrong", error}
        }

        if(!user) return { success : false, message : "The user doesn't exist"}
        // Create the proposition
        const inserts = {
            country,
            city,
            hostCapacity,
            description
        }
        try{
            console.log(Object.keys(user.__proto__))

            const proposition = await user.createHostproposition(inserts)
            // const test = await user.addHostProposition(proposition)
            // console.log(test)
            return {success : true, message : "Proposition created", proposition}
        }
        catch (error){
            console.log(error)
            return {success : false, message : "Oups", error}

        }
    }

}

export default CreateProposition