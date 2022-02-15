import { Request } from "express";
import getDevicesListFromDB from "../db/getDevicesListFromDb";
import DeviceInCart from "../types/DeviceInCart";
import MalformedCartError from "../types/Errors/MalformedCartError";

export default async function validateCart(request: Request): Promise<void> {
  const { items } = request.body
  if (!items) {
    throw new MalformedCartError()
  }
  const devicesList = await getDevicesListFromDB()
  try {
    // For each item in the cart, verify if it actually exists
    (items as DeviceInCart[]).forEach(item => {
      const itemExists = devicesList.find(device => device._id === item._id)
      if (!itemExists) {
        throw new MalformedCartError()
      }
    })
  }
  catch (error) {
    throw new MalformedCartError()
  }
}