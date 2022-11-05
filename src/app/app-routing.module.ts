import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component'
import { HomeComponent } from './pages/home/home.component'
import { LoginPageComponent } from './pages/login-page/login-page.component'

const routes: Routes = [
    { path: 'login', component: LoginPageComponent },
    { path: '', component: AppComponent },
    { path: 'home', component: HomeComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
