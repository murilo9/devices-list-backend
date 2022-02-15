import DeviceInCart from "./DeviceInCart";
import PersistentEntity from "./PersistentEntity";

export default interface Cart extends PersistentEntity {
  items: DeviceInCart[],
  user: string
}