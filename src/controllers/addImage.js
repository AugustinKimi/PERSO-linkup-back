import User from "../models/User.js";



class AddImage  {

    addImage = async (request, response) => {
        const {userId, imageUrl} = request.body
        if(!userId || !imageUrl) 
            return response.status(401).json({success : false, message : "Something wrong with the request"})

        let user

        try{
            user = await User.findOne({where : { id : userId }})
        }
        catch (error){
            return response.status(401).json({success : false, message : error})
        }

        if(!user) 
            return response.status(401).json({success : false, message : "No user found"})

        const inserts = {
            imageUrl
        }

        try{
            console.log(Object.keys(user.__proto__));
            const image = user.createImageurl(inserts)
            return response.status(200).json({success : true, message : "Image added", data : image})
        }
        catch(error){
            return response.status(401).json({success : false, message : error})
        }
    }

}

export default AddImage