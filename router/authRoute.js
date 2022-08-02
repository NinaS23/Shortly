import { singUp, signin } from "../controllers/authController.js";
import { validateRegister, validateLogin } from "../middlewares/authMiddleware.js"
import { Router } from "express";

const userRoute = Router()

userRoute.post("/signup", validateRegister, singUp)
userRoute.post("/signin", validateLogin, signin )

export default userRoute;