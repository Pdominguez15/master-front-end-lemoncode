import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"],
})
export class NavComponent implements OnInit {
  constructor(private _service: AuthService) {}

  ngOnInit(): void {}

  userLogged() {
    return this._service.isLogged();
  }
}
