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

async function redirectShortUrl(shortUrl) {
    const query = `
    SELECT u.* 
    FROM urls u
    JOIN "shortUrl" s ON s."urlId" = u.id
    WHERE s."shortUrl" = $1 
    `;

    return connection.query(query, [shortUrl]);
}

async function countViews(view, id) {
    const query = `
    UPDATE urls
    SET views = $1
    WHERE id = $2
    `;

    return connection.query(query, [view, id]);
}

export {
    insertUserUrl,
    searchUrl,
    createShortUrl,
    getShortUrlAndUrl,
    redirectShortUrl,
    countViews
}
