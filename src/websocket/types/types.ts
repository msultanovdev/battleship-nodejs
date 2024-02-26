export interface IRegDataType {
  id: number;
  name: string;
  password: string;
}

export interface IRoomUser {
  name: string;
  index: number;
}
export interface IRoom {
  roomId: number;
  roomUsers: IRoomUser[];
  addUser: (user: IRoomUser) => void;
}
