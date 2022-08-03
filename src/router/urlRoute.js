import { shortUrl } from "../controllers/urlsController.js";
import { tokenValidate } from "../middlewares/tokenMIddleware.js";
import { urlVerify } from "../middlewares/urlMiddleware.js";
import { Router } from "express";


const urlRouter = Router()

urlRouter.post("/urls/shorten", tokenValidate, urlVerify, shortUrl)

export default urlRouter;