import { TRANSACTION_TYPE } from '../types/transaction.types';

interface IInputParams {
  currentAmount: number;
  transactionAmount: number;
}

export const updateBalance: {
  [key in TRANSACTION_TYPE]: (props: IInputParams) => number;
} = {
  BUY: buyTransaction,
  SELL: sellTransaction,
};

function buyTransaction({ currentAmount, transactionAmount }: IInputParams) {
  return currentAmount + transactionAmount;
}

function sellTransaction({ currentAmount, transactionAmount }: IInputParams) {
  return currentAmount - transactionAmount;
}
