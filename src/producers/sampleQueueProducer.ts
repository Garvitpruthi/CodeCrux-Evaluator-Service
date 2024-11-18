import sampleQueue from "../queues/sampleQueue";

export default async function(name: string, payload: Record<string, unknown>) {
    console.log("Adding job to the queue.....");
    await sampleQueue.add(name, payload);
    console.log("successfully added into the queue");
}