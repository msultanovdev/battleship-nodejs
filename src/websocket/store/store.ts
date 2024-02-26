import WebSocket from "ws";
import { IRegDataType, IRoom } from "../types/types";
type wsType = {
  [key: string]: WebSocket;
};
type storeType = {
  user_db: IRegDataType[];
  room_db: IRoom[];
  ws_db: wsType;
};

export const { user_db, ws_db, room_db }: storeType = {
  user_db: new Array(),
  ws_db: {},
  room_db: new Array(),
};
