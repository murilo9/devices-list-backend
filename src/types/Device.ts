import DeviceType from "./DeviceType";
import PersistentEntity from "./PersistentEntity";

interface Device extends PersistentEntity {
  name: string,
  type: DeviceType,
  description: string
}

export default Device;