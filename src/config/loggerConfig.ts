import 'winston-mongodb'

import { Logform } from 'winston';
import winston from 'winston';

import serverConfig from './serverConfig';

const allowedTransports: winston.transport[] = [];

allowedTransports.push(new winston.transports.Console({
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        winston.format.printf((log: Logform.TransformableInfo)=> `${log.timestamp} [${log.level}]: ${log.message}`)
    )
}))

const mongoDbUrl = serverConfig.LOG_DB_URL as string;

allowedTransports.push(new winston.transports.MongoDB({
    level: 'info',
    db: mongoDbUrl,
    collection: 'logs'
})
);

export const logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        winston.format.printf((log: Logform.TransformableInfo)=> `${log.timestamp} [${log.level.toUpperCase()}]: ${log.message}`)
    ),
    transports: allowedTransports
});
