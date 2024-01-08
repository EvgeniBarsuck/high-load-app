import { Response } from 'express';

import { ErrorBase } from './error.base';

export function exceptionHandler(error: ErrorBase, res: Response) {
  res.status(error.code);
  res.json({
    message: error.message,
    metadata: error.metadata,
    code: error.code,
  });
}
