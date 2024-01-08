import { StatusCodes } from 'http-status-codes';

import { ErrorBase } from '../../base/exception/error.base';

export class NotEnoughFundsError extends ErrorBase {
  readonly code = StatusCodes.BAD_REQUEST;
  static readonly message = 'Not enough funds';

  constructor(metadata?: unknown) {
    super(NotEnoughFundsError.message, metadata);
  }
}
