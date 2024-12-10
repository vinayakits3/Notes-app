export interface IPagination {
  page: number;
  limit: number;
}

export interface IApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface IErrorDetails {
  field?: string;
  message: string;
}