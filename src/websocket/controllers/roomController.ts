import { Room } from "./../models/Room";
import { room_db, user_db, ws_db } from "../store/store";
import { IRegDataType } from "../types/types";

export const roomController = (id: number) => {
  const newRoom = new Room();

  const user = user_db.find((user) => user.id === id);
  // console.log("user: ", user);

  newRoom.addUser({ index: user.id, name: user.name });

  room_db.push(newRoom);
  const roomData = {
    type: "update_room",
    data: JSON.stringify([
      { roomId: id, roomUsers: [{ name: user.name, index: user.id }] },
    ]),
    id: 0,
  };
  ws_db[user.id].send(JSON.stringify(roomData));
};
