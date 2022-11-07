import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public potentialUser: User;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getRandomUser().subscribe((user) => {
      console.log(user);
      this.potentialUser = user;
    });
  }
}
