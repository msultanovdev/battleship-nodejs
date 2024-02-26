import { Room } from "./../models/Room";
import { room_db, user_db, ws_db } from "../store/store";

export const addShipsController = (data: string) => {
  const d = JSON.parse(data);
  console.log(d.ships[0].position);

  //   ws_db[id].send(JSON.stringify(roomData));
};
