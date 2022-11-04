import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}

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
