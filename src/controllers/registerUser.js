import User from "../models/User.js";

class RegisterUser {
    async registerUser (name, lastName, email, age, password, city) 
    {
        if(!name || !lastName || !email || !password || !age || !city ) return {success : false}
        if(await this.checkExistingEmail(email)) return {success : false}
        const hashPassword = password
        const creationDate = new Date()
        const inserts = {
            name ,
            lastName,
            email,
            password : hashPassword,
            verifyKey : "ubseihfbi"
        }
        const user = await HostUser.create(inserts)
        console.log(user)
        return {success : true}
    }
    
    checkExistingEmail (email) {
        return new Promise(async (resolve, reject) => {
            const emails = await HostUser.findAll({ where : {
                email 
            }})
            if(emails.length > 0) return resolve(true)
            console.log(emails.length)
            return resolve(false)
        })
    }
}



export default RegisterUser