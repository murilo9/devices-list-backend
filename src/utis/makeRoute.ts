/* eslint-disable max-len */
import { Request, Response } from 'express';
import Controller from '../types/Controller';
import IAssertiveController from '../types/IAssertiveController';
import IRestrictAccessController from '../types/IRestricAccessController';

export default function makeRoute(controller:
  | Controller
  | (Controller & IAssertiveController)
  | (Controller & IRestrictAccessController)
  | (Controller & IAssertiveController & IRestrictAccessController)) {
  return async (request: Request, response: Response) => {
    try {
      // If the controller has an authenticator
      if ('authorizator' in controller) {
        const authorization = await controller.authorizator(request);
        if (authorization.failed) {
          response.status(authorization.statusCode).send(authorization.payload);
          return;
        }
      }
      // If the controller has a validator
      if ('validator' in controller) {
        const validation = await controller.validator(request);
        if (validation.failed) {
          response.status(validation.statusCode).send(validation.payload);
          return;
        }
      }
      // Calls the controller handler
      const handle = await controller.handle(request);
      response.status(handle.statusCode).send(handle.payload);
      // TODO: request and response logging
    } catch (error) {
      // Catches runtime (REALLY unexpected) errors
      console.log(error);
      response.status(500).send(error);
    }
  };
}
