import { ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  AfterViewInit,
  Input,
} from '@angular/core';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { BehaviorSubject } from 'rxjs';
import { UserService } from '../services/user.service';
import { User } from '../user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserProfileComponent implements OnInit {
  faHandshake = faHandshake;
  faTimes = faTimes;
  faEye = faEye;
  faLocationArrow = faLocationArrow;

  @ViewChild('bio') bio: ElementRef;
  @ViewChild('bioTitle') bioTitle: ElementRef;

  public user: User;

  constructor(
    private userService: UserService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.userService.user$.subscribe((user) => {
      console.log('User profile component got user', user);
      this.user = user;
      this.cd.detectChanges();
    });

    this.userService.getRandomUser().subscribe((user) => {
      this.user = user;
      this.cd.detectChanges();
    });
  }
  ngOnDestroy(): void {
    this.userService.user$.unsubscribe();
  }
  public showBio() {
    this.bio.nativeElement.classList.add('active');

    this.bio.nativeElement.classList.remove('animate__slideOutDown');

    this.bio.nativeElement.classList.add(
      'animate__animated',
      'animate_slideInUp'
    );
    this.bio.nativeElement.classList.add('animate__slideInUp');
  }
  public hideBio() {
    this.bio.nativeElement.classList.remove('animate_slideInUp');

    this.bio.nativeElement.classList.add(
      'animate__animated',
      'animate__slideOutDown'
    );
  }
  public match() {
    this.userService.matchWithUser(this.user);
  }
  public skip() {
    this.userService.skipUser(this.user);
  }
}
