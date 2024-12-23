import { NextFunction, Request, Response } from "express";
import { ZodSchema } from "zod";

import { logger } from "../config/loggerConfig";



// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const validate = (schema: ZodSchema<any>) => (req: Request, res: Response, next: NextFunction)=>{
    try {
        schema.parse({
            ...req.body
        });
        next();
    } catch (error: unknown) {
        if(error instanceof Error){
            logger.error(error.message || 'Unknown error during validation');
        }
        res.status(400).json({
            success: false, 
            message: "Invalid request params recieved", 
            data: {},
            erorr: error
        });
    }
}