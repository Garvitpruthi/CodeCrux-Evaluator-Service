import bodyParser from "body-parser";
import express, { Express } from "express";

import serverConfig from "./config/serverConfig";
import sampleQueueProducer from "./producers/sampleQueueProducer";
// import sampleQueue from "./queues/sampleQueue";
import apiRouter from "./routes";
import bullBoardRouter from "./routes/bullBoard";
import SampleWorker from "./workers/SampleWorker";


const app: Express = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(bodyParser.text());

app.use('/api', apiRouter);
app.use('/admin/queues', bullBoardRouter);

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