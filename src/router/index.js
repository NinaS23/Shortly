import { Router } from "express";
import authRouter from "./authRoute.js";
import urlRouter from "./urlRoute.js";
import userRoute from "./userRoute.js";

const router = Router()

router.use(authRouter);
router.use(urlRouter);
router.use(userRoute);

export default router;