/* eslint-disable max-len */
import { Request, Response } from 'express';
import Controller from '../types/Controller';
import IAssertiveController from '../types/IAssertiveController';
import IRestrictAccessController from '../types/IRestricAccessController';
import getErrorStatusCode from './getErrorStatusCode';

/**
 * Converts a Controller class into a function acceptable by Express.
 * @param controller The controller class intance.
 * @returns 
 */
export default function makeRoute(controller:
  | Controller
  | (Controller & IAssertiveController)
  | (Controller & IRestrictAccessController)
  | (Controller & IAssertiveController & IRestrictAccessController)) {
  return async (request: Request, response: Response) => {
    // If the controller has an authenticator
    if ('authorizator' in controller) {
      try {
        await controller.authorizator(request)
      }
      catch (error) {
        response.status(getErrorStatusCode(error)).send(error.message);
        return
      }
    }
    // If the controller has a validator
    if ('validator' in controller) {
      try {
        await controller.validator(request)
      }
      catch (error) {
        response.status(getErrorStatusCode(error)).send(error.message);
        return
      }
    }
    // Calls the controller handler
    try {
      const flowResult = await controller.handle(request);
      response.status(200).send(flowResult);
    } catch (error) {
      response.status(getErrorStatusCode(error)).send(error.message);
    }
  }
}
