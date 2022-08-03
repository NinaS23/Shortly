import { connection } from "../db.js"

async function insertUrl(userUrl, id) {
    return connection.query('INSERT INTO urls (url , "userId") VALUES ($1, $2)', [userUrl, id])
}
const insertUserUrl = {
    insertUrl
}


async function findUrl(url,id){
    return connection.query('SELECT * FROM urls WHERE url = $1 AND "userId" = $2', [url,id])
}
const searchUrl ={
    findUrl
}

async function insertShortUrl(shortUrl, id) {
    return connection.query('INSERT INTO "shortUrl" ("shortUrl", "urlId") VALUES ($1, $2)', [shortUrl, id]);
}
const createShortUrl={
    insertShortUrl
}

async function getShortUrlAndUrl(id) {
    const query = `
    SELECT u.id, s."shortUrl", u.url
    FROM urls u
    JOIN "shortUrl" s ON s."urlId" = u.id
    WHERE u.id = $1
    `;

    return connection.query(query, [id]);
}


export {
    insertUserUrl,
    searchUrl,
    createShortUrl,
    getShortUrlAndUrl
}
