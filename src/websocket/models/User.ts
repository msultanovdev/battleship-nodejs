export class User {
  public winsCount: number;

  constructor(
    public id: number,
    public name: string,
    public password: string,
  ) {
    this.winsCount = 0;
  }
}
