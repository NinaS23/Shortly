import { connection } from "../db.js";


 async function getValueFromUsers(columnName, info) {
    return connection.query(`SELECT * FROM users WHERE "${columnName}" = $1`, [info]);
}

export const getEmail = {
    getValueFromUsers
}