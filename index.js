import express, {json} from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoute from "./router/authRoute.js"

dotenv.config();

const server = express();
server.use(json());
server.use(cors());

server.use(userRoute);

const PORT= process.env.PORT || 5000
server.listen(PORT ,()=>{
    console.log(`subiu a porta ${PORT} 
    `)
})  