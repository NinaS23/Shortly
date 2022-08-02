import { singUpSchema } from "../schemas/authSchema.js";
import { getEmail } from "../services/authService.js";
import { connection } from "../db.js";

export async function validateRegister(req,res,next){
    const { name, email, password, confirmPassword } = req.body;
    try {
        const { error } = singUpSchema.validate({ name, email, password, confirmPassword })
        
        if (error) {
            console.log(error.details)
            return res.sendStatus(422)
        }
        const { rows : userExistent } = await getEmail.getValueFromUsers('email', email)
        if(userExistent[0]){
            return res.sendStatus(409)
        }
        next()

    } catch (e) {
        console.log(e)
        res.send("erro")
    }
}