import { Request, Response, NextFunction } from 'express';
import YAML from 'yamljs';
import axios from 'axios';
// import logger from '@shared/utils/logger';
import { config } from '@shared/index';
import { ErrorDetail } from '@shared/interface/haddler';

const errors = YAML.load(config.DIR_ERRORS);

export async function createError(errorKey: string, lang: 'en' | 'es' = 'en'): Promise<ErrorDetail> {
  const errorType = errorKey.split('.').reduce((acc, key) => acc[key], errors);
  if (!errorType) {
    return {
      key: 'internal_error',
      code: 'INTERNAL_SERVER_ERROR',
      message: lang === 'es' ? 'Ocurrió un error interno.' : 'An internal error occurred.',
      status: 500,
    };
  }
  return {
    key: errorType.key,
    code: errorType.code,
    message: errorType.message[lang],
    status: errorType.status,
  };
}

export async function errorHandler(err: unknown, req: Request, res: Response, next: NextFunction) {
  if (!err) return next();

  const lang = req.headers['accept-language']?.startsWith('es') ? 'es' : 'en';
  let errorDetail: ErrorDetail;

  if (err instanceof Error) {
    errorDetail = await createError(err.message, lang);
  } else if (axios.isAxiosError(err)) {
    errorDetail = await createError('http_client.get_error', lang);
  } else {
    errorDetail = {
      key: 'Unknown_Error',
      code: 'UNKNOWN_ERROR',
      message: 'An unknown error occurred',
      status: 500,
    };
  }

  res.status(errorDetail.status).json({
    error: {
      key: errorDetail.key,
      code: errorDetail.code,
      message: errorDetail.message,
    },
  });
}
