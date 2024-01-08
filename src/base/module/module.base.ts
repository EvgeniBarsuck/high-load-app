import { Application } from 'express';

import { RouterBase } from '../router/router.base';

export abstract class ModuleBase {
  controllers: { new (app: Application): RouterBase }[] = [];
  app: Application;

  constructor(app: Application) {
    this.app = app;
  }

  abstract setupControllers(): void;
}
