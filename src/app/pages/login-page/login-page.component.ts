import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
    constructor(private routerService: Router) {}

    ngOnInit(): void {}

    public login() {
        this.routerService.navigate(['home'])
    }

    public toggleActive() {
        console.log('Clicked')
        let element = document.querySelector('.no-account')
        if (element) {
            if (element.classList.contains('active')) {
                element.classList.remove('active')
            } else {
                element.classList.add('active')
            }
        }
    }
}
