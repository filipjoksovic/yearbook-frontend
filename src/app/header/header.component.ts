import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
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

  public showHeader: boolean = true;

  constructor(private router: Router) {}

  expandHeader() {
    document.querySelector('.header-wrapper__user').classList.toggle('active');
    document.querySelector('.header__user').classList.toggle('active');
  }

  ngOnInit(): void {
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe((navEnd: NavigationEnd) => {
        if (navEnd.url.includes('/login') || navEnd.url.includes('/register')) {
          this.showHeader = false;
        } else {
          this.showHeader = true;
        }
      });
  }
}
