import { Address } from './classes/address';
import { Biography } from './classes/biography';
import { Faculty } from './classes/faculty';
import { Interest } from './classes/interest';

export class User {
  private _id: string;
  private _first_name: string;
  private _last_name: string;
  private _username: string;
  private _image_url: string;
  private _email: string;
  private _password: string;
  private _gender: string;
  private _dob: string;
  private _bio: Biography;
  private _location: string;
  private _interests: Interest[];
  private _faculty: Faculty;
  private _address: Address;
  constructor(obj: any) {
    this._id = obj?.id;
    this._first_name = obj?.first_name;
    this._last_name = obj?.last_name;
    this._username = obj?.username;
    this._image_url = obj?.image_url;
    this._email = obj?.email;
    this._password = obj?.password;
    this._dob = obj?.dob;
    this._bio = obj?.bio;
    this._location = obj?.location;
    this._interests = obj?.interests;
    this._faculty = obj?.faculty;
    this._address = obj?.address;
    this._gender = obj?.gender;
  }
  public get id(): string {
    return this._id;
  }
  public set id(value: string) {
    this._id = value;
  }
  public get first_name(): string {
    return this._first_name;
  }
  public set first_name(value: string) {
    this._first_name = value;
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
  public get bio(): Biography {
    return this._bio;
  }
  public set bio(value: Biography) {
    this._bio = value;
  }
  public get location(): string {
    return this._location;
  }
  public set location(value: string) {
    this._location = value;
  }
  public get interests(): Interest[] {
    return this._interests;
  }
  public set interests(value: Interest[]) {
    this._interests = value;
  }
  public get faculty(): Faculty {
    return this._faculty;
  }
  public set faculty(value: Faculty) {
    this._faculty = value;
  }
  public get address(): Address {
    return this._address;
  }
  public set address(value: Address) {
    this._address = value;
  }
  public get dob(): string {
    return this._dob;
  }
  public set dob(value: string) {
    this._dob = value;
  }
  public get last_name(): string {
    return this._last_name;
  }
  public set last_name(value: string) {
    this._last_name = value;
  }
  public get username(): string {
    return this._username;
  }
  public set username(value: string) {
    this._username = value;
  }
  public get gender(): string {
    return this._gender;
  }
  public set gender(value: string) {
    this._gender = value;
  }
}
