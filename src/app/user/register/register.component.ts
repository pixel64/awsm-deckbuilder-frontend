import { Component, OnInit } from '@angular/core';
import {RegisterService} from '../service/register.service';
import {LoginResponse} from '../api/LoginResponse';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  name: string;
  email: string;
  password: string;
  passwordCheck: string;

  constructor(private registerService: RegisterService) { }

  ngOnInit() {
  }

  register(name: string, email: string, password: string, passwordCheck: string) {
    this.registerService.registerUser(name, password, email).subscribe(
        (response: LoginResponse) => {
          if(response.success) {
            alert("success")
          } else {
            alert("already registered")
          }
        },
        error => alert(error)
    )
  }

}
