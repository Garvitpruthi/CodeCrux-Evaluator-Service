import { Request, Response } from 'express';

import { logger } from '../config/loggerConfig';
import { CreateSubmissionDto } from '../dtos/CreateSubmissionDto';

export const addSubmission = (req: Request, res: Response) => {
    const submissionDto = req.body as CreateSubmissionDto;
    logger.info(JSON.stringify(submissionDto));

    
    // TODO: Add validation using zod

    res.status(201).json({
        success: true,
        error: {},
        message: 'Successfully collected the submission',
        data: submissionDto
    });
};