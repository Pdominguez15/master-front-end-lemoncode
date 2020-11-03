import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  constructor(private _service: AuthService, private router: Router) {}

  ngOnInit(): void {}

  userLogged() {
    return this._service.isLogged();
  }

  getName() {
    return this._service.getUsername();
  }

  logout() {
    this._service.logout();
    this.router.navigate(["/home"]);
  }

  redirect() {
    this.router.navigate(["/home"]);
  }
}
