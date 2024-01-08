import { TRANSACTION_TYPE } from '../../../../common/types/transaction.types';

export interface IChangeBalanceRequestBody {
  transactionType: TRANSACTION_TYPE;
  transactionAmount: number;
}

export interface IChangeBalanceRequestParam {
  userId: string;
}
