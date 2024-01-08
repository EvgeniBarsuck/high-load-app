import { DataTypes } from 'sequelize';

import { sequelizePostgres } from '../../database/database.connection';
import {
  IModelBase,
  OmitBaseProps,
  modelConstructor,
} from '../../base/database/model.constructor';

export interface IUser extends IModelBase {
  balance: number;
}

export type CreateUserPropsType = OmitBaseProps<IUser>;

export const userModel = modelConstructor<IUser>('users', sequelizePostgres, {
  balance: {
    type: DataTypes.DECIMAL,
    validate: {
      isDecimal: true,
      min: 0,
    },
  },
});
