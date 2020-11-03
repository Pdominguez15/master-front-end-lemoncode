import { Injectable } from "@angular/core";

//Modelo
import { UserEntity } from "../models/UserEntity";

//Router
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  user: UserEntity;

  constructor(private router: Router) {
    this.user = {
      id: "",
      name: "",
    };
  }

  login(username: string, password: string): boolean {
    if (username === "master8@lemoncode.net" && password === "12345678") {
      this.user = {
        id: "1",
        name: "Invitado",
      };
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    this.user = {
      id: "",
      name: "",
    };
  }

  isLogged(): boolean {
    if (this.user.id != "" && this.user.name != "") {
      return true;
    } else {
      return false;
    }
  }

  getUsername(): string {
    return this.user.name;
  }
}
