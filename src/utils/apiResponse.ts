import { Response } from 'express';
import { IApiResponse } from '../types/common.types';

export class ApiResponse {
  static success<T>(res: Response, data?: T, status: number = 200): Response {
    const response: IApiResponse<T> = {
      success: true,
      data,
    };
    return res.status(status).json(response);
  }

  static error(res: Response, message: string, status: number = 500, error?: any): Response {
    const response: IApiResponse<null> = {
      success: false,
      message,
      error,
    };
    return res.status(status).json(response);
  }
}