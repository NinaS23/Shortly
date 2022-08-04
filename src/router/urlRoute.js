import { getShortUrl, getUrlsById, redirectUrl, deleteUrl} from "../controllers/urlsController.js";
import { tokenValidate } from "../middlewares/tokenMIddleware.js";
import { urlVerify } from "../middlewares/urlMiddleware.js";
import { Router } from "express";


const urlRouter = Router()

urlRouter.post("/urls/shorten", tokenValidate, urlVerify, getShortUrl)
urlRouter.get("/urls/:id", getUrlsById)
urlRouter.get("/urls/open/:shortUrl", redirectUrl)
urlRouter.delete("/urls/:id",tokenValidate, deleteUrl)
 
export default urlRouter;