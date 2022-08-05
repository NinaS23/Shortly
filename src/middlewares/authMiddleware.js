import { singUpSchema, signinSchema } from "../schemas/authSchema.js";
import { getEmail } from "../services/authService.js";
import bcrypt from "bcrypt";


export async function validateRegister(req, res, next) {
    const { name, email, password, confirmPassword } = req.body;
    try {
        const { error } = singUpSchema.validate({ name, email, password, confirmPassword }, {abortEarly: false})

        if (error) {
            
            return res.status(422).send(error.details.map(detail => detail.message))
        }
        const { rows: userExistent } = await getEmail.getValueFromUsers('email', email)
        if (userExistent[0]) {
            return res.sendStatus(409)
        }
        next()

    } catch (e) {
        console.log(e)
        res.send("erro")
    }
}
export async function validateLogin(req, res, next) {
    const { email, password } = req.body;
    try {
        const { error } = signinSchema.validate({ email, password },  {abortEarly: false})
        if (error) {
            return res.status(422).send(error.details.map(detail => detail.message))
        }
        const { rows: userExist } = await getEmail.getValueFromUsers('email', email);

        if (!userExist[0] || !bcrypt.compareSync(password, userExist[0].password)) {
            
            return res.status(401).send('user Not Found')
        }
        const user = userExist[0]
        res.locals.user = user;
        next()

    } catch (e) {
        console.log(e)
        res.send("erro")
    }
}