import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { LoginPageComponent } from './pages/login-page/login-page.component'
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'
import { HomeComponent } from './pages/home/home.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

@NgModule({
    declarations: [
        AppComponent,
        LoginPageComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
