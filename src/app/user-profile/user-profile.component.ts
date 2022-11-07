import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  faHandshake = faHandshake;
  faTimes = faTimes;
  faEye = faEye;
  faLocationArrow = faLocationArrow;

  @ViewChild('bio') bio: ElementRef;
  @ViewChild('bioTitle') bioTitle: ElementRef;

  constructor() {}

  ngOnInit(): void {}

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
  public match() {}
  public nextUser() {}
}
