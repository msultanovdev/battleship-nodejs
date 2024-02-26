import { Room } from "./../models/Room";
import { room_db, user_db, ws_db } from "../store/store";
import { IRegDataType } from "../types/types";

export const addUserToRoom = (indexRoom: number, id: number) => {
  const room = room_db.find((room) => room.roomId === indexRoom);
  const user = user_db.find((user) => user.id === id);
  // console.log("users: ", room);
  // console.log("indexRoom: ", indexRoom);
  // console.log("rooms: ", room_db);

  if (user) {
    console.log(`Error: The ${user.name} has been already joined to the Room`);
    return;
  }

  room.addUser({ index: user.id, name: user.name });

  const roomData = {
    type: "update_room",
    data: JSON.stringify([
      { roomId: indexRoom, roomUsers: [{ name: user.name, index: user.id }] },
    ]),
    id: 0,
  };
  ws_db[user.id].send(JSON.stringify(roomData));
};
