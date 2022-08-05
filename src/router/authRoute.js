import { singUp, signin } from "../controllers/authController.js";
import { validateRegister, validateLogin } from "../middlewares/authMiddleware.js"
import { Router } from "express";

const authRouter = Router()

authRouter.post("/signup", validateRegister, singUp)
authRouter.post("/signin", validateLogin, signin)

export default authRouter;