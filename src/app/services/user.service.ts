import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { MOCK_USERS } from '../mock/USERS_MOCK_DATA';
import { User } from '../user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  public user$: BehaviorSubject<User> = new BehaviorSubject<User>(null);

  public setUser(user: User) {
    this.user$.next(user);
  }
  public getUser(): User {
    return this.user$.getValue();
  }

  public getRandomUser(): Observable<User> {
    const randomIndex = Math.floor(Math.random() * MOCK_USERS.response.length);
    return of(new User(MOCK_USERS.response[randomIndex]));
  }
  public matchWithUser(user: User) {
    console.log('Match with user', user);
    this.getRandomUser().subscribe((user) => {
      this.user$.next(user);
    });
  }
  public skipUser(user: User) {
    console.log('Skip user', user);
  }
}
