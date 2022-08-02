
import{connection } from "../db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { getSession, sessionToken } from "../services/authService.js";

export async function singUp(req, res) {
    const { name, email, password } = req.body;
    try {
        const encodePassword = bcrypt.hashSync(password , 10)
        await connection.query(`
        INSERT INTO users (name, email, password) 
            VALUES ($1, $2, $3)
        `, [name, email, encodePassword])
        
        res.sendStatus(201)

    } catch (e) {
        console.log(e)
        res.status(500).send("xabu")
    }


}

export async function signin(req,res){
     const user = res.locals.user;
    try {
        const { rows : userLogin } = await getSession.session('userId', user.id);
        if(userLogin[0]){
           return  res.send({token: userLogin[0].token});
        }else{
            const info = { userId: user.id };
            const secret = process.env.JWT_SECRET;
            const token = jwt.sign(info, secret);
            const userId = user.id
            
            await sessionToken.insertSession(token,userId);
            res.status(200).send({token});
        }
       
    } catch (e) {
        console.log(e)
        res.status(500).send("xabu")
    }
}