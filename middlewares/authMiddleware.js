import { singUpSchema, signinSchema } from "../schemas/authSchema.js";
import { getEmail } from "../services/authService.js";
import bcrypt from "bcrypt";


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
export async function validateLogin(req,res,next){
    const {  email, password} = req.body;
    try {
        const { error } = signinSchema.validate({email, password})
        if(error){
            console.log(error.details)
            return res.sendStatus(422)
        }
        const { rows : userExist } = await getEmail.getValueFromUsers('email', email);
        console.log(userExist[0])
        if(!userExist[0] || !bcrypt.compareSync(password, userExist[0].password)){
           return res.sendStatus(401)
        }
        next()

    } catch (e) {
        console.log(e)
        res.send("erro")
    }
}