import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  faEllipsisVertical = faEllipsisVertical;
  @Input()
  public title: string = 'Yearbook';
  @Input()
  public user: User;
  constructor() {}

  expandHeader() {
    document.querySelector('.header-wrapper__user').classList.toggle('active');
    document.querySelector('.header__user').classList.toggle('active');
  }

  ngOnInit(): void {}
}
