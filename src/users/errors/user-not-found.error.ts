import { StatusCodes } from 'http-status-codes';

import { ErrorBase } from '../../base/exception/error.base';

export class UserNotFoundError extends ErrorBase {
  readonly code = StatusCodes.NOT_FOUND;
  static readonly message = 'User not found';

  constructor(metadata?: unknown) {
    super(UserNotFoundError.message, metadata);
  }
}
