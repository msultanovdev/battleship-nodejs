export class User {
  public winsCount: number;

  constructor(
    public id: string,
    public name: string,
    public password: string,
  ) {
    this.winsCount = 0;
  }
}
