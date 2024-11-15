import express, { Express } from "express";

import serverConfig from "./config/serverConfig";



const app: Express = express();

app.listen(serverConfig.PORT, ()=>{
    console.log(`server stated at *: ${serverConfig.PORT}`);
    console.log("wowwwww");
});