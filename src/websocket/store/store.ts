import WebSocket from "ws";
import { IRegDataType } from "../types/types";
type wsType = {
  [key: string]: WebSocket;
};
type storeType = {
  user_db: IRegDataType[];
  ws_db: wsType;
};

export const { user_db, ws_db }: storeType = {
  user_db: new Array(),
  ws_db: {},
};
