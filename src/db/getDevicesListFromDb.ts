import Device from "../types/Device";
import getClient from "../utils/getDbClient";
import devicesList from '../devicesList';
import UnexpectedDbError from "../types/Errors/UnexpectedDbError";

export default async function getDevicesListFromDB(): Promise<Device[]> {
  const requestClientResult = await getClient();
  const client = requestClientResult
  const db = client.db();
  try {
    const collection = db.collection<Device>('devices');
    let existingDevices = await collection.find({}).toArray() as Device[];
    if (!existingDevices.length) {
      await collection.insertMany(devicesList);
    }
    existingDevices = await collection.find({}).toArray() as Device[];
    return existingDevices
  } catch (error) {
    console.log(error);
    throw new UnexpectedDbError();
  }
  finally {
    client.close();
  }
}