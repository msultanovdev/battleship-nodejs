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
    console.log(type);
    ws_db[id] = ws;

    switch (type) {
      case "reg":
        userRegistrationController(id, data);
        break;
      case "create_room":
        roomController(id);
        break;
    }
  });
});
