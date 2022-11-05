export class Message {
  private _id: string;
  private _conversation_id: string;
  private _sender_id: string;
  private _text: string;
  private _timestamp: string;

  constructor(obj: any) {
    this._id = obj?.id;
    this._conversation_id = obj?.conversation_id;
    this._sender_id = obj?.sender_id;
    this._text = obj?.text;
    this._timestamp = obj?.timestamp;
  }
  public get id(): string {
    return this._id;
  }
  public set id(value: string) {
    this._id = value;
  }
  public get conversation_id(): string {
    return this._conversation_id;
  }
  public set conversation_id(value: string) {
    this._conversation_id = value;
  }
  public get sender_id(): string {
    return this._sender_id;
  }
  public set sender_id(value: string) {
    this._sender_id = value;
  }
  public get text(): string {
    return this._text;
  }
  public set text(value: string) {
    this._text = value;
  }
  public get timestamp(): string {
    return this._timestamp;
  }
  public set timestamp(value: string) {
    this._timestamp = value;
  }
}
