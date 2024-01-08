import express from 'express';
import bodyParser from 'body-parser';
import YAML from 'yamljs';
import swaggerUi from 'swagger-ui-express';
import path from 'path';

import { SequelizeStorage, Umzug } from 'umzug';
import { sequelizePostgres } from './src/database/database.connection';
import { resolveModules } from './app.modules';
import { applicationConfig } from './src/config/application.config';

import 'ts-node/register';

export async function setup() {
  const app = express();
  app.use(bodyParser.json());

  resolveModules(app);

  const umzug = new Umzug({
    migrations: { glob: 'migrations/*.{js,ts,up.sql}' },
    context: sequelizePostgres.getQueryInterface(),
    storage: new SequelizeStorage({ sequelize: sequelizePostgres }),
    logger: console,
  });

  await umzug.up({
    step: 1,
  });

  const swaggerDocument = YAML.load(path.join(__dirname, 'swagger.yaml'));

  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  app.listen(applicationConfig.port, () =>
    console.log(`server started at ${applicationConfig.port} port`),
  );

  return app;
}

export const app = setup();
