import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  loginInvalid: boolean;

  constructor(private _service: AuthService, private router: Router) {
    this.username = "";
    this.password = "";
  }

  ngOnInit(): void {}

  login() {
    if (this._service.login(this.username, this.password)) {
      this.username = "";
      this.password = "";
      this.router.navigate(["/dashboard"]);
    } else {
      this.loginInvalid = true;
    }
  }
  focus() {
    this.loginInvalid = false;
  }
}
