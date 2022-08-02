
import{connection } from "../db.js"

 async function getValueFromUsers(columnName, info) {
    return connection.query(`SELECT * FROM users WHERE "${columnName}" = $1`, [info]);
}

export const getEmail = {
    getValueFromUsers
}


async function session(columnName, info) {
    return await connection.query(`SELECT * FROM sessions WHERE "${columnName}" = $1`, [info]);
}

export const getSession = {
   session
}


async function insertSession(token, userId){
    return await connection.query(`INSERT INTO sessions (token, "userId")  VALUES ($1, $2)`, [token, userId]);
}

export const sessionToken ={
   insertSession
}