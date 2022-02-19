import { Request } from "express";
import getDevicesListFromDB from "../db/getDevicesListFromDb"
import Controller from "../types/Controller";
import Device from "../types/Device";

/**
 * Responsible for the Get Registered Devices List flow.
 */
export default class GetDevicesListController extends Controller {
  async handle(request: Request): Promise<Device[]> {
    const devices = await getDevicesListFromDB();
    return devices
  }
}