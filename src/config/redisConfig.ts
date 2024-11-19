import Redis from "ioredis";

import { logger } from "./loggerConfig";
import serverConfig from './serverConfig';

 const redisConfig = {
    port: serverConfig.REDIS_PORT,
    host: serverConfig.REDIS_HOST,
    maxRetriesPerRequest: null
};
let redisConnection: Redis;
try{
    redisConnection = new Redis(redisConfig);
    logger.info(`Redis connection established Successfully`);
}
catch(error){
    logger.error(`Error while connecting to Redis: ${error}`);
    throw new Error(`Redis connection could't be established`);
}

// handling runtime errors emitted by the Redis client

redisConnection.on("error", (err) => {
    logger.error("Redis error:", err);
});

export default redisConnection;