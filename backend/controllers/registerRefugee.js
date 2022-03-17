import connection from "../db/index.js";


class RegisterHost {

    async registerHost (name, lastName, email, age, password, city) {

        console.log(name, lastName, email, password, age, city)
        if(!name || !lastName || !email || !password || !age || !city ) return {success : false}
        if(!await this.checkExistingEmail(email)) return {success : false}
        const hashPassword = password
        const creationDate = new Date()
        const inserts = {
            name ,
            lastName,
            email,
            age: new Date(),
            password : hashPassword,
            city,
            creationDate
        }
        connection.query(`INSERT INTO hosts SET ?`, inserts, (error, results) => {
            if (error) throw error;
            else console.log("user added")
        })
        return {success : true}
    }
    
    checkExistingEmail (email) {
        return new Promise((resolve, reject) => {
            connection.query('SELECT email FROM hosts WHERE email=?',[email], (error, results) => {
                if(error) return reject(error)
    
                if(results.length > 0) return resolve(false)
                return resolve(true)
            })
        })
    }
}



export default RegisterHost