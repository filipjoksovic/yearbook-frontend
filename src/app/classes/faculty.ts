import { Address } from './address';

export class Faculty {
  private _id: string;
  private _name: string;
  private _image_url: string;
  private _email: string;
  private _address: Address;

  constructor(obj: any) {
    this._id = obj?.id;
    this._name = obj?.name;
    this._image_url = obj?.image_url;
    this._email = obj?.email;
    this._address = obj?.address;
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
  public get address(): Address {
    return this._address;
  }
  public set address(value: Address) {
    this._address = value;
  }
}
