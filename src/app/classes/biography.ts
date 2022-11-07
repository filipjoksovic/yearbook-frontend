export class Biography {
  private _title: string;
  private _description: string;

  constructor(obj: any) {
    this._title = obj?.title;
    this._description = obj?.description;
  }

  public get title(): string {
    return this._title;
  }
  public set title(value: string) {
    this._title = value;
  }
  public get description(): string {
    return this._description;
  }
  public set description(value: string) {
    this._description = value;
  }
}
