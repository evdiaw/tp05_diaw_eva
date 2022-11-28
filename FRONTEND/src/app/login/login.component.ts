import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  login: string = "";
  password: string = "";

  sub: Subscription = new Subscription;

  ngOnInit(): void {
  }

  connexion(): void {
    this.loginService.login(this.login, this.password).subscribe(
      (response) => {
        console.log(response);
      }
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
