import { Application, Request, Response } from 'express';

import { RouterBase } from '../../../base/router/router.base';
import { changeBalanceValidation } from './change-balance.validation';
import { changeBalanceService } from './change-balance.service';
import {
  IChangeBalanceRequestBody,
  IChangeBalanceRequestParam,
} from './interfaces/change-balance.request';
import { exceptionHandler } from '../../../base/exception/error.handler';

export class ChangeBalanceController extends RouterBase {
  constructor(app: Application, baseUrl: string = 'users') {
    super(app, baseUrl, 'change-balance/:userId');

    this.setupRoute();
  }

  setupRoute(): void {
    this.app.put(
      this.getPath(),
      changeBalanceValidation,
      async (request: Request, response: Response) => {
        const body = <IChangeBalanceRequestBody>request.body;
        const params = <IChangeBalanceRequestParam>(request.params as unknown);

        const result = await changeBalanceService.handler({
          userId: params.userId,
          ...body,
        });

        result.unwrap(
          (successResult) => response.send(successResult),
          (error) => exceptionHandler(error, response),
        );
      },
    );
  }
}
