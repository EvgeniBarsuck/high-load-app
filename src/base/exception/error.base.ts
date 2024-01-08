import { StatusCodes } from 'http-status-codes';

export abstract class ErrorBase extends Error {
  abstract readonly code: StatusCodes;
  readonly message: string;
  readonly metadata?: unknown;

  constructor(message: string, metadata: unknown = {}) {
    super(message);
    this.metadata = metadata;
    this.message = message;
  }
}
