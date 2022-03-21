import User from "../models/User.js";

class GetUserPropositions  {

    getUserPropositions = async (request, response) => {
        const {userId } = request.params
        console.log("1")
        if(!userId) {
            response.status(401).json({success : false, message : "Something wrong with the request"})
            return
        }
        console.log("2")

        let user

        try{
            user = await User.findOne({where : { id : userId }})
        }
        catch (error){
            response.status(401).json({success : false, message : error})
            return
        }
        console.log("3")

        if(!user) {
            response.status(401).json({success : false, message : "No user found"})
            return
        }
        console.log("4")

        if(!user.dataValues.isHost) {
            response.status(401).json({success : false, message : "User is not a host"})
            return
        }
        console.log("5")

        try{
            const userPropositions = await user.getHostpropositions()
            console.log(userPropositions)
            response.status(200).json({success : true, message : "User requests", data : userPropositions})
            return
        }
        catch (error){
            console.log(error)
            response.status(401).json({success : false, message : error})
            return

        }
    }

}

export default GetUserPropositions