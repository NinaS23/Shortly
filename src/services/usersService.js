import { connection } from "../db.js";



async function findUser(userId) {
        const query = `
        SELECT us.id, us.name, SUM(ur.views) as "visitCount"
        FROM users us
        JOIN urls ur ON us.id = ur."userId"
        WHERE us.id = $1
        GROUP BY us.id;
        `;
    
        return connection.query(query, [userId]);  
}
export const getUser = {
    findUser
}

 export async function joinUrlAndShortUrl(userId){
    const query = `
    SELECT u.id, s."shortUrl", u.url, u.views as "visitCount"
    FROM urls u
    JOIN "shortUrl" s ON s."urlId" = u.id
    WHERE u."userId" = $1
    GROUP BY s."shortUrl", u.id
    `
    return connection.query(query, [userId]);
}

