import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root',
})
export class TitleService {
  public $title = new BehaviorSubject<string>('YearBook');
  public $user = new BehaviorSubject<User>(null);

  constructor() {}

  public setTitle(title: string) {
    this.$title.next(title);
  }
  public setUser(user: User) {
    this.$user.next(user);
  }
}
