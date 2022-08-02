import { singUp } from "../controllers/authController.js";
import { validateRegister } from "../middlewares/authMiddleware.js"
import { Router } from "express";

const userRoute = Router()

userRoute.post("/signup", validateRegister, singUp)

export default userRoute;