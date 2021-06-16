import { Collection, MongoClient } from "mongodb";
import { Credential } from "../types";

let client: MongoClient;

export const connectDatabase = async (url: string): Promise<void> => {
  client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
};

export const disconnectDatabase = async (): Promise<void> => {
  await client.close();
};

export const getCollection = <T>(name: string): Collection<T> => {
  return client.db().collection<T>(name);
};

export const getCredentialsCollection = (): Collection<Credential> => {
  return getCollection<Credential>("credentials");
};
