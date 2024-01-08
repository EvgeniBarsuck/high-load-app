import { Application, Request, Response } from 'express';

import { RouterBase } from '../../../base/router/router.base';
import { getBalanceService } from './get-user-balance.service';
import { exceptionHandler } from '../../../base/exception/error.handler';
import { IGetBalanceSerivceInput } from './interfaces/get-user-balance.service';
import { getBalanceValidation } from './get-user-balance.validation';

export class GetBalanceController extends RouterBase {
  constructor(app: Application, baseUrl: string = 'users') {
    super(app, baseUrl, 'get-user-balance/:userId');

    this.setupRoute();
  }

  setupRoute(): void {
    this.app.get(
      this.getPath(),
      getBalanceValidation,
      async (request: Request, response: Response) => {
        const params = <IGetBalanceSerivceInput>(request.params as unknown);

        const result = await getBalanceService.handler({
          userId: params.userId,
        });

        result.unwrap(
          (successResult) => response.send(successResult),
          (error) => exceptionHandler(error, response),
        );
      },
    );
  }
}
