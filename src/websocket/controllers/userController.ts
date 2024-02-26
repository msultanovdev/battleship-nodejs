import { User } from "../models/User";
import { user_db, ws_db } from "../store/store";
import { IRegDataType } from "../types/types";

export const userRegistrationController = (id: number, data: string) => {
  const { name, password }: IRegDataType = JSON.parse(data);

  const user = user_db.some((user) => user.name === name);
  const newUser = new User(id, name, password);
  const userData = {
    name: newUser.name,
    index: newUser.id,
    error: user,
    errorText: user ? "This user has been already logged in" : "",
  };
  user_db.push(newUser);
  ws_db[id].send(
    JSON.stringify({ type: "reg", data: JSON.stringify(userData), id: 0 }),
  );
};
