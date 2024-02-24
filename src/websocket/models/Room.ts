import { IRoomUser } from "./../types/types";

export class Room {
  private static id = 0;
  public roomId: number;

  constructor(public roomUsers: IRoomUser[] = []) {
    this.roomId = Room.generateRoomId();
  }

  addUser(user: IRoomUser) {
    this.roomUsers.push(user);
  }

  private static generateRoomId = () => {
    this.id += 1;
    return this.id;
  };
}
