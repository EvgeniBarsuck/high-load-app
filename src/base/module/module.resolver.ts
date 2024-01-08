import { Application } from 'express';

import { ModuleBase } from './module.base';

export function moduleResolver(
  modules: { new (app: Application): ModuleBase }[],
  app: Application,
) {
  for (const module of modules) {
    new module(app);
  }
}
