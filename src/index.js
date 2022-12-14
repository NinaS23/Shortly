import express, {json} from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "../src/router/index.js"


dotenv.config();

const server = express();
server.use(json());
server.use(cors());

server.use(router);

const PORT= process.env.PORT || 5007
server.listen(PORT ,()=>{
    console.log(`subiu a porta ${PORT} 
    `)
})  