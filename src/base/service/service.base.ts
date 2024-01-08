import { Result } from '@badrap/result';

export abstract class ServiceBase {
  abstract handler(input: unknown): Promise<Result<unknown, Error>>;
}
