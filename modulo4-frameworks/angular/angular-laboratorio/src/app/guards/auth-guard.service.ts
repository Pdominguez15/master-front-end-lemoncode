import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { CanActivate } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuardService implements CanActivate {
  constructor(private _authService: AuthService, private router: Router) {}

  canActivate() {
    if (!this._authService.isLogged()) {
      this.router.navigate(["/home"]);
      return false;
    }

    return true;
  }
}
