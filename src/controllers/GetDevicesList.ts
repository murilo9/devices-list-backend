import { Request } from "express";
import getDevicesListFromDB from "../db/getDevicesListFromDb"
import Controller from "../types/Controller";
import Device from "../types/Device";
import Result from "../types/Result";

export default class GetDevicesListController extends Controller {
  async handle(request: Request): Promise<Result<Device[]>> {
    const getDevices = await getDevicesListFromDB();
    return getDevices
  }
}