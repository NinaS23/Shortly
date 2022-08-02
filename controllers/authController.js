
import{connection } from "../db.js";
import bcrypt from "bcrypt"

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
    const { email, password } = req.body;
    try {
       res.sendStatus(200)

    } catch (e) {
        console.log(e)
        res.status(500).send("xabu")
    }
}