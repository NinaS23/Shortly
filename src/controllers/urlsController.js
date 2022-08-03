import jwt from 'jsonwebtoken';
import 'dotenv/config';
import { nanoid } from 'nanoid';
import { insertUserUrl, searchUrl, CreateShortUrl} from '../services/urlService.js';

const secretKey = process.env.JWT_SECRET;

export async function getShortUrl(req,res){
 const { url } = req.body
 const { token } = res.locals;
 try{
  const userUrl = jwt.verify(token, secretKey);

  await insertUserUrl.insertUrl(url, userUrl.userId)

  const { rows : findUrlId } = await searchUrl.findUrl(url,userUrl.userId)
  
  const shortUrl = nanoid(10);

  await CreateShortUrl.insertShortUrl(shortUrl, findUrlId[0].id)
  
   res.status(201).send({shortUrl})
 }catch(e){
     console.log(e)
    res.status(500).send(e)
 }
}