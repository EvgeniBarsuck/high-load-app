import { Application } from 'express';

import { controllerResolver } from '../base/controller/controller.resolver';
import { ModuleBase } from '../base/module/module.base';
import { userRestControllers } from './rest/user.rest.controllers';

export class UserModule extends ModuleBase {
  controllers = userRestControllers;

  constructor(app: Application) {
    super(app);
    this.setupControllers();
  }

  setupControllers() {
    controllerResolver(this.controllers, this.app);
  }
}
