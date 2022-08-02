
import{connection } from "../db.js";



export async function singUp(req, res) {
    const { name, email, password } = req.body;
    try {
        await connection.query(`
        INSERT INTO users (name, email, password) 
            VALUES ($1, $2, $3)
        `, [name, email, password])
        
        res.sendStatus(201)

    } catch (e) {
        console.log(e)
        res.status(500).send("xabu")
    }


}