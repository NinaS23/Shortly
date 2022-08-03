import { connection } from "../db.js"

async function geyTOken(columnName, info) {
    return await connection.query(`SELECT * FROM sessions WHERE "${columnName}" = $1`, [info]);
}

export const selectToken = {
    geyTOken
}
