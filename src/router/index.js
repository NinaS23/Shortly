import { Router } from "express";
import authRouter from "./authRoute.js";
import urlRouter from "./urlRoute.js";
import userRoute from "./userRoute.js";
import rankingRoute from "./rankingRoute.js";

const router = Router()

router.use(authRouter);
router.use(urlRouter);
router.use(userRoute);
router.use(rankingRoute);

export default router;