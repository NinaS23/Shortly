import jwt from 'jsonwebtoken';
import 'dotenv/config';
import { nanoid } from 'nanoid';
import {
  insertUserUrl,
  searchUrl,
  createShortUrl,
  getShortUrlAndUrl,
  redirectShortUrl,
  countViews,
  searchUrlByUserId,
  deleteShortUrl,
  deleteUrlById
} from '../services/urlService.js';

const secretKey = process.env.JWT_SECRET;

export async function getShortUrl(req, res) {
  const { url } = req.body
  const { token } = res.locals;
  try {
    const userUrl = jwt.verify(token, secretKey);

    await insertUserUrl.insertUrl(url, userUrl.userId)

    const { rows: findUrlId } = await searchUrl.findUrl(url, userUrl.userId)

    const shortUrl = nanoid(10);

    await createShortUrl.insertShortUrl(shortUrl, findUrlId[0].id)

    res.status(201).send({ shortUrl })
  } catch (e) {
    console.log(e)
    res.status(500).send(e)
  }
}

export async function getUrlsById(req, res) {
  const { id } = req.params;
  try {
    const findShortUrl = await getShortUrlAndUrl(id);

    if (findShortUrl.rowCount === 0) {
      return res.sendStatus(404);
    }

    res.status(200).send(findShortUrl.rows[0]);
  } catch (e) {
    console.log(e)
    res.status(500).send(e)
  }
}

export async function redirectUrl(req, res) {
  const { shortUrl } = req.params;
  try {
    const isUrlFound = await redirectShortUrl(shortUrl)

    if (isUrlFound.rowCount === 0) {
      return res.sendStatus(404);
    }
    const view = isUrlFound.rows[0].views + 1

    await countViews(view, isUrlFound.rows[0].id);

    res.redirect(isUrlFound.rows[0].url)
  } catch (e) {
    console.log(e)
    res.status(500).send(e)
  }
}

export async function deleteUrl(req, res) {
  const { id } = req.params;
  const { token } = res.locals;
  try {
    const findShortUrl = await getShortUrlAndUrl(id);

    if (findShortUrl.rowCount === 0) {
      return res.sendStatus(404);
    }
    const user = jwt.verify(token, secretKey);
    

    const { rows : findUrl } = await searchUrlByUserId(id,user.userId)

    if(findUrl.rowCount === 0){
      return res.sendStatus(401)
    } 
    
    await deleteShortUrl(findUrl[0].shortUrlId)

    await deleteUrlById(id)


    res.sendStatus(204)
  } catch (e) {
    console.log(e)
    res.status(500).send(e)
  }
}