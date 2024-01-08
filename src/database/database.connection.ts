import { Sequelize } from 'sequelize';

import { getDatabaseConfig } from '../config/database.config';

const postgresConfig = getDatabaseConfig('postgres');

export const sequelizePostgres = new Sequelize(postgresConfig);
