export class User {
  private _id: string;
  private _name: string;
  private _image_url: string;
  private _email: string;
  private _password: string;

  constructor(obj: any) {
    this._id = obj?.id;
    this._name = obj?.name;
    this._image_url = obj?.image_url;
    this._email = obj?.email;
    this._password = obj?.password;
  }
  public get id(): string {
    return this._id;
  }
  public set id(value: string) {
    this._id = value;
  }
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
  public get image_url(): string {
    return this._image_url;
  }
  public set image_url(value: string) {
    this._image_url = value;
  }
  public get email(): string {
    return this._email;
  }
  public set email(value: string) {
    this._email = value;
  }
  public get password(): string {
    return this._password;
  }
  public set password(value: string) {
    this._password = value;
  }
}
