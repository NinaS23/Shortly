import { getRankings } from "../controllers/rankingController.js";
import { Router } from "express";

const rankingRoute = Router();

rankingRoute.get("/ranking", getRankings)

export default rankingRoute;
