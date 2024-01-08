import { Application } from 'express';

import { RouterBase } from '../router/router.base';

export function controllerResolver(
  controllers: { new (app: Application): RouterBase }[],
  app: Application,
) {
  for (const controller of controllers) {
    new controller(app);
  }
}
