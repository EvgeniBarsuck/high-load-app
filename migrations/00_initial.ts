import { QueryInterface, Model } from 'sequelize';

import { IUser, userModel } from '../src/users/database/users.model';

import 'dotenv/config';

export async function up({ context }: { context: QueryInterface }) {
  try {
    await context.createTable('users', userModel.getAttributes());
    await userModel.create<Model<IUser>>({
      id: '5565408d-94ff-4a8e-8673-0b1ba337b391',
      balance: 10000,
      created_at: new Date('01-01-2024'),
      updated_at: new Date('01-01-2024'),
    });
  } catch (e: any) {
    throw new Error(e);
  }
}

export async function down({ context }: { context: QueryInterface }) {
  try {
    await context.dropAllTables();
  } catch (e: any) {
    throw new Error(e);
  }
}
