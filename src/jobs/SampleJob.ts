import { Job } from "bullmq";

import { IJob } from "../types/bullMqJobDefinition";

export default class SampleJob implements IJob {
    name: string;
    payload: Record<string, unknown>;

    constructor(payload: Record<string, unknown>) {
        this.payload = payload;
        this.name = this.constructor.name;
    }

    handle = (job?:Job)=>{
        console.log("Handler of the job called");
        console.log("Job Payload:", this.payload);

        if (job) {
            console.log(`Job Name: ${job.name}, Job ID: ${job.id}, Job Data:`, job.data);
        }

        // Simulate job processing (replace with actual logic)
        console.log("Processing job...");

    };
    failed = (job?:Job):void=>{
        console.log("job failed");
        if(job) {
            console.log(job.id); 
        }
    }
};