import { Router } from "express";
import userRoute from "./authRoute.js";
import urlRouter from "./urlRoute.js";

const router = Router()

router.use(userRoute);
router.use(urlRouter);

export default router;