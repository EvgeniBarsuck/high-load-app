import 'dotenv/config';

const databaseConfig = {
  postgres: {
    dialect: 'postgres',
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
  },
} as const;

type Keys = keyof typeof databaseConfig;

export function getDatabaseConfig<T extends Keys>(
  databaseName: T,
): (typeof databaseConfig)[T] {
  return databaseConfig[databaseName];
}
