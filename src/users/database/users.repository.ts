import { Model, Transaction } from 'sequelize';

import { RepositoryBase } from '../../base/database/repository.base';
import { sequelizePostgres } from '../../database/database.connection';
import { IUser, userModel } from './users.model';

class UserRepository implements RepositoryBase<IUser> {
  async updateOne(
    params: Partial<IUser>,
    updateFields: Partial<IUser>,
  ): Promise<IUser> {
    const [, rows] = await sequelizePostgres.transaction(
      {
        isolationLevel: Transaction.ISOLATION_LEVELS.READ_UNCOMMITTED,
      },
      async () => {
        const updatedUser = await userModel.update<Model<IUser>>(updateFields, {
          where: params,
          returning: true,
        });

        return updatedUser;
      },
    );

    return rows[0].dataValues;
  }

  async findOne(params: Partial<IUser>): Promise<IUser | null> {
    const user = await userModel.findOne({ where: params });

    if (!user) {
      return null;
    }

    return user?.dataValues;
  }
}

export const userRepository = new UserRepository();
