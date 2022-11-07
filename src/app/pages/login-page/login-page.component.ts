import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  constructor(private routerService: Router) {}

  ngOnInit(): void {}

  public login() {
    this.hideAllElements();
  }

  public hideAllElements() {
    let elements = document.querySelectorAll('span');
    elements.forEach((element: any) => {
      element.style.opacity = '0';
    });
    let element: any = document.querySelector('.no-account');
    element.style.opacity = '0';
    let forms = document.querySelectorAll('.form-group');
    forms.forEach((element: any) => {
      element.style.opacity = '0';
    });
    let buttons = document.querySelectorAll('.btn');
    buttons.forEach((element: any) => {
      element.style.opacity = '0';
    });
    let title: any = document.querySelector('.form-title');
    title.style.opacity = '0';
    setTimeout(() => {
      let container: any = document.querySelector('.form-container');
      container.style.width = '100%';
      container.style.height = '100%';
      container.style.borderRadius = '0';
    }, 250);

    setTimeout(() => {
      this.routerService.navigate(['home']);
    }, 700);
  }

  public toggleActive() {
    console.log('Clicked');
    let element = document.querySelector('.no-account');
    if (element) {
      if (element.classList.contains('active')) {
        element.classList.remove('active');
      } else {
        element.classList.add('active');
      }
    }
  }
}
