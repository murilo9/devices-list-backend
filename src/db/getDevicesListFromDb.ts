import { MongoClient, ObjectId } from "mongodb";
import Device from "../types/Device";
import Result from "../types/Result";
import getClient from "../utis/getDbClient";
import devicesList from '../devicesList';

export default async function getDevicesListFromDB(): Promise<Result<Device[]>> {
  const requestClientResult = await getClient();
  if (requestClientResult.failed) {
    return requestClientResult;
  }
  const client = requestClientResult.payload as MongoClient;
  const db = client.db();
  try {
    const collection = db.collection<Device>('devices');
    const devices = await collection.find({}).toArray() as Device[];
    if (!devices.length) {
      await collection.insertMany(devicesList);

    }
    const result = await collection.find({}).toArray() as Device[];
    return {
      failed: false,
      payload: result,
      statusCode: 200
    }
  } catch (error) {
    console.log(error);
    return {
      failed: true,
      payload: error,
      statusCode: 500,
    };
  } finally {
    client.close();
  }
}