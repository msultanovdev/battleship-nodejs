export interface IRegDataType {
  id: number;
  name: string;
  password: string;
}

export interface IRoomUser {
  name: string;
  id: number;
}
export interface IRoom {
  roomId: number;
  roomUsers: IRoomUser[];
}
