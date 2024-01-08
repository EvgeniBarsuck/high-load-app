import { Result } from '@badrap/result';

import { ServiceBase } from '../../../base/service/service.base';
import { updateBalance } from '../../../common/utils/update-balance';
import { userRepository } from '../../database/users.repository';
import { IChangeBalanceSerivceInput } from './interfaces/change-balance.service';
import { IUser } from '../../database/users.model';
import { ErrorBase } from '../../../base/exception/error.base';
import { UserNotFoundError } from '../../errors/user-not-found.error';
import { NotEnoughFundsError } from '../../errors/not-enough-funds.error';

class ChangeBalanceService implements ServiceBase {
  async handler(
    input: IChangeBalanceSerivceInput,
  ): Promise<Result<IUser, ErrorBase>> {
    const user = await userRepository.findOne({ id: input.userId });

    if (!user) {
      return Result.err(new UserNotFoundError());
    }

    if (Number(user.balance) < Number(input.transactionAmount)) {
      return Result.err(new NotEnoughFundsError());
    }

    const updateUserBalanceResult = await userRepository.updateOne(
      {
        id: input.userId,
      },
      {
        balance: updateBalance[input.transactionType]({
          currentAmount: user.balance,
          transactionAmount: input.transactionAmount,
        }),
      },
    );

    return Result.ok(updateUserBalanceResult);
  }
}

export const changeBalanceService = new ChangeBalanceService();
