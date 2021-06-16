export type Command = "list" | "add" | "delete";

export type Credential = {
  service: string;
  username: string;
  password: string;
};
