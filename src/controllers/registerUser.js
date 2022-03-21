import User from "../models/User.js";
import bcrypt from 'bcrypt'

class RegisterUser {
    
    registerUser = async(request, response)  =>
    {
        
        const {name, lastName, email, password, isHost, isRefugee} = request.body

        if(!this.validatePassword(password)) {
            response.status(401).json({success : false, message : "Invalide password format"})
            return
        }
        const hashPassword = await this.hashPassword(password)
        const inserts = {
            name ,
            lastName,
            email,
            password : hashPassword,
            verifyKey : this.generateKey(),
            isHost,
            isRefugee
        }
        try{
            const user = await User.create(inserts)
            // console.log(user)
            response.status(200).json({success : true, message : "User created"})
            return
        }
        catch (error){
            // console.log(error)
            response.status(401).json({success : false, message :  error})
            return

        }
    }

    validatePassword = (password) => {
        if(password.length < 8) return false
        if(!/\d/.test(password)) return false
        if(!/[a-z]/.test(password)) return false
        if(!/[A-Z]/.test(password)) return false
        if(/[^0-9a-zA-Z]/.test(password)) return false

        return true
    }

    hashPassword = async (password, saltRounds = 10) => {
        try {
            // Generate a salt
            const salt = await bcrypt.genSalt(saltRounds);
    
            // Hash password
            return await bcrypt.hash(password, salt);
        } catch (error) {
            console.log(error);
        }
    
        // Return null if error
        return null;
    };

    generateKey = function(){
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }
    
}



export default RegisterUser