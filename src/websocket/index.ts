import { WebSocketServer } from "ws";
import { v4 as uuidv4 } from "uuid";
import dotenv from "dotenv";
import { userRegistrationController } from "./controllers/userController";
import { ws_db } from "./store/store";
dotenv.config();

const connectionInfo = `WebSocket is runing on ws://localhost: ${process.env.WS_PORT}`;

const server = new WebSocketServer({
  port: Number(process.env.WS_PORT) || 3000,
});
console.log(connectionInfo);

server.on("connection", (ws) => {
  const id = uuidv4();
  console.log(`User ${id} is connected`);

  ws.on("message", (message) => {
    const { type, data } = JSON.parse(message.toString());
    console.log(data);
    ws_db[id] = ws;

    switch (type) {
      case "reg":
        userRegistrationController(id, data);
        break;
    }
  });
});
