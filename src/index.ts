import express, { Express } from "express";

import serverConfig from "./config/serverConfig";
import sampleQueueProducer from "./producers/sampleQueueProducer";
// import sampleQueue from "./queues/sampleQueue";
import apiRouter from "./routes";
import SampleWorker from "./workers/SampleWorker";


const app: Express = express();

app.use('/api', apiRouter);

app.listen(serverConfig.PORT, ()=>{
    console.log(`server stated at *: ${serverConfig.PORT}`);
    console.log("wowwwww");

    SampleWorker('SampleQueue');
    
    sampleQueueProducer("SampleJob", {
        name: "Garvit",
        company: "Google",
        position: "SDE"
    }, 2);
    sampleQueueProducer("SampleJob", {
        name: "Garv",
        company: "microsoft",
        position: "SWE"
    }, 1);
});