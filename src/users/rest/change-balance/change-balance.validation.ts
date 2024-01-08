import { check, param } from 'express-validator';

import { validate } from '../../../base/middleware/validate.middleware';
import { TRANSACTION_TYPE } from '../../../common/types/transaction.types';

export const changeBalanceValidation = validate([
  check('transactionAmount').isFloat({ min: 1 }),
  check('transactionType').isIn([TRANSACTION_TYPE.BUY, TRANSACTION_TYPE.SELL]),
  param('userId').isUUID('4'),
]);
