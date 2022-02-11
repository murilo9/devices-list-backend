import PersistentEntity from "./PersistentEntity";

export interface Password extends PersistentEntity {
  hash: string,
  userId: string
}
