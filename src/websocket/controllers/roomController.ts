import { Room } from "./../models/Room";
import { room_db, user_db, ws_db } from "../store/store";

export const roomController = (userId: number) => {
  const newRoom = new Room();
  const { id, name } = user_db.find((user) => user.id === userId);
  newRoom.addUser({ id, name });

  room_db.push(newRoom);
  const roomData = {
    type: "create_game",
    data: JSON.stringify({
      idGame: 0,
      idPlayer: userId,
    }),
    id: 0,
  };
  ws_db[id].send(JSON.stringify(roomData));
};
