import DeviceType from "./DeviceType";
import PersistentEntity from "./PersistentEntity";

interface Device extends PersistentEntity {
  name: string,
  type: DeviceType,
  description: string,
  price: number
}

export default Device;