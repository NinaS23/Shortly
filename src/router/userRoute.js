import { userInformations } from "../controllers/usersController.js";
import { tokenValidate } from "../middlewares/tokenMIddleware.js";
import { Router } from "express";

const userRoute = Router();

userRoute.get("/users/me", tokenValidate, userInformations )

export default userRoute;