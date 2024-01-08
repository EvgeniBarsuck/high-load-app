import { TRANSACTION_TYPE } from '../../../../common/types/transaction.types';

export interface IChangeBalanceSerivceInput {
  userId: string;
  transactionAmount: number;
  transactionType: TRANSACTION_TYPE;
}
