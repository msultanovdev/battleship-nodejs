import { addUserToRoom } from "./controllers/addUserToRoom";
import { addShipsController } from "./controllers/addShipsController";
import { roomController } from "./controllers/roomController";
import { WebSocketServer } from "ws";
import dotenv from "dotenv";
import { userRegistrationController } from "./controllers/userController";
import { ws_db } from "./store/store";
dotenv.config();

const connectionInfo = `WebSocket is runing on ws://localhost: ${process.env.WS_PORT}`;

const server = new WebSocketServer({
  port: Number(process.env.WS_PORT) || 3000,
});
console.log(connectionInfo);
let id = 0;
const generateId = () => {
  return id++;
};
server.on("connection", (ws) => {
  const id = generateId();
  console.log(`User ${id} is connected`);

  ws.on("message", (message) => {
    const { type, data } = JSON.parse(message.toString());
    ws_db[id] = ws;
    console.log("type: ", type);

    switch (type) {
      case "reg":
        userRegistrationController(id, data);
        break;
      case "update_room":
        console.log("update_room: ", data);

      case "create_room":
        roomController(id);
        break;
      case "add_user_to_room":
        if (typeof data === "string") {
          addUserToRoom(JSON.parse(data)?.indexRoom, id);
        }
        break;
      case "add_ships":
        addShipsController(data);
        break;
    }
  });
});
