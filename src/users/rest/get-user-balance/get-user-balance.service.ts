import { Result } from '@badrap/result';

import { ServiceBase } from '../../../base/service/service.base';
import { userRepository } from '../../database/users.repository';
import {
  IGetBalanceSerivceInput,
  IGetBalanceSerivceOutput,
} from './interfaces/get-user-balance.service';
import { ErrorBase } from '../../../base/exception/error.base';
import { UserNotFoundError } from '../../errors/user-not-found.error';

class GetBalanceService implements ServiceBase {
  async handler(
    input: IGetBalanceSerivceInput,
  ): Promise<Result<IGetBalanceSerivceOutput, ErrorBase>> {
    const user = await userRepository.findOne({ id: input.userId });

    if (!user) {
      return Result.err(new UserNotFoundError());
    }

    return Result.ok({
      currentBalance: user.balance,
    });
  }
}

export const getBalanceService = new GetBalanceService();
