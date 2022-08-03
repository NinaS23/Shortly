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
const CreateShortUrl={
    insertShortUrl
}

export {
    insertUserUrl,
    searchUrl,
    CreateShortUrl
}
