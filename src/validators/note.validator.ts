import { Request } from 'express';
import { body, validationResult } from 'express-validator';
import { ValidationError } from '../utils/errors';
import { IErrorDetails } from '../interfaces/common.interface';

export const validateNote = async (req: Request, isUpdate: boolean = false) => {
  await Promise.all([
    body('title')
      .if((_, { req }) => !isUpdate || req.body.title)
      .trim()
      .notEmpty()
      .withMessage('Title is required')
      .isLength({ max: 255 })
      .withMessage('Title must be less than 255 characters')
      .run(req),
    body('content')
      .if((_, { req }) => !isUpdate || req.body.content)
      .trim()
      .notEmpty()
      .withMessage('Content is required')
      .run(req),
  ]);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const details: IErrorDetails[] = errors.array().map(error => ({
      field: error.param,
      message: error.msg
    }));
    throw new ValidationError('Validation failed', details);
  }
};