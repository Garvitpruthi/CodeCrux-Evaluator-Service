import { logger } from "../config/loggerConfig";
import sampleQueue from "../queues/sampleQueue";

export default async function(name: string, payload: Record<string, unknown>, priority: number) {
    logger.info("Adding job to the queue.....");
    await sampleQueue.add(name, payload, {priority});
    logger.info("successfully added into the queue");
}