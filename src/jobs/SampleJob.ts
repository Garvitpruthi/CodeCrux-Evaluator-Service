import { Job } from "bullmq";

import {logger} from "../config/loggerConfig";
import { IJob } from "../types/bullMqJobDefinition";

export default class SampleJob implements IJob {
    name: string;
    payload: Record<string, unknown>;

    constructor(payload: Record<string, unknown>) {
        this.payload = payload;
        this.name = this.constructor.name;
    }

    handle = (job?:Job)=>{
       
        logger.info(`Handler of the job called`);
        logger.info(`Job payload: ${this.payload}`);
       
        if (job) {
            logger.info(`Job Name: ${job.name}, Job ID: ${job.id}, Job Data: ${job.data}`);
        }

        // Simulate job processing (replace with actual logic)
        logger.info("Processing job...");

    };
    failed = (job?:Job):void=>{
        logger.info("job failed");
        if(job) {
            logger.info(`${job.id}`); 
        }
    }
};