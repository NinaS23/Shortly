import jwt from 'jsonwebtoken';
import 'dotenv/config';
import { getUser, joinUrlAndShortUrl } from '../services/usersService.js';
const secretKey = process.env.JWT_SECRET;

export async function userInformations(req, res) {
  const { token } = res.locals;
  try {
    const user = jwt.verify(token, secretKey);

    const { rows: isUserExistent, rowCount } = await getUser.findUser(user.userId)

    if (rowCount === 0) {
      res.sendStatus(404)
    }

    const { rows: url } = await joinUrlAndShortUrl(user.userId)

    res.status(200).send({ ...isUserExistent[0], shortenedUrls: url });

  } catch (e) {
    console.log(e)
    res.status(500).send(e)
  }
}