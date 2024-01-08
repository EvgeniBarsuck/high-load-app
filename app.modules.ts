import { Application } from 'express';

import { moduleResolver } from './src/base/module/module.resolver';
import { UserModule } from './src/users/users.module';

const modules = [UserModule];

export function resolveModules(app: Application) {
  moduleResolver(modules, app);
}
