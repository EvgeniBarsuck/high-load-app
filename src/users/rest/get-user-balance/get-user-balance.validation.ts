import { param } from 'express-validator';

import { validate } from '../../../base/middleware/validate.middleware';

export const getBalanceValidation = validate([param('userId').isUUID('4')]);
