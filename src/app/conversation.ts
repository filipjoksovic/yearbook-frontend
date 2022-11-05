import { Message } from './message';
import { User } from './user';

export class Conversation {
  private _id: string;
  private _image_url: string;
  private _participant_ids: string[];
  private _participants: User[];
  private _messages: Message[];

  constructor(obj: any) {
    this._id = obj.id;
    this._image_url = obj.image_url;
    this._participant_ids = obj.participant_ids;
    this._messages = obj.messages;
    this._participants = obj.participants;
  }
  public get id(): string {
    return this._id;
  }
  public set id(value: string) {
    this._id = value;
  }
  public get image_url(): string {
    return this._image_url;
  }
  public set image_url(value: string) {
    this._image_url = value;
  }
  public get participant_ids(): string[] {
    return this._participant_ids;
  }
  public set participant_ids(value: string[]) {
    this._participant_ids = value;
  }
  public get messages(): Message[] {
    return this._messages;
  }
  public set messages(value: Message[]) {
    this._messages = value;
  }
  public get participants(): User[] {
    return this._participants;
  }
  public set participants(value: User[]) {
    this._participants = value;
  }
}
