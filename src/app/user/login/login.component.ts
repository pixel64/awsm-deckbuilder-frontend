import {Component, OnInit} from '@angular/core';
import {LoginService} from '../service/login.service';
import {LoginResponse} from '../api/LoginResponse';
import {LoginStorageService} from '../service/login-storage.service';
import {User} from '../User';
import {UserService} from '../service/user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loggedIn: boolean;
    name: string;

    constructor(private loginService: LoginService, private loginStorageService: LoginStorageService, private userService: UserService) {
    }

    ngOnInit() {
        this.loginStorageService.getUser().subscribe(
            loginUser => {
                this.userService.setLoggedInUser(loginUser.name, loginUser.token, loginUser.loggedIn);
                this.name = this.userService.name
                this.loggedIn = this.userService.loggedIn;
            }
        );
    }

    public login(name: string, password: string) {
        this.loginService.logIn(name, password)
            .subscribe((erg: LoginResponse) => {
                this.userService.setLoggedInUser(name, erg !== null ? erg.token : '', erg !== null && erg.success);
                this.name = this.userService.name
                this.loggedIn = this.userService.loggedIn;
            });
    }

    public logout() {
        this.userService.logOut();
        this.loginStorageService.saveUser(new User("", "", false));
    }
}
