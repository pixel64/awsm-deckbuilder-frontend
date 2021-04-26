import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {LoginPageComponent} from './login-page/login-page.component';

@NgModule({
    declarations: [
        LoginComponent,
        LoginPageComponent,
        RegisterComponent,
    ],
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
    ],
    exports: [
        LoginComponent,
        RegisterComponent
    ]
})
export class UserModule {
}
