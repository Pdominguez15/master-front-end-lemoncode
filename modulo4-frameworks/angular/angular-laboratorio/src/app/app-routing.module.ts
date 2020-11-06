import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//Componentes publicos
import { AcercaDeComponent } from "./components/public/acerca-de/acerca-de.component";
import { HomeComponent } from "./components/public/home/home.component";
import { LoginComponent } from "./components/public/login/login.component";

//Componentes privados
import { CrudComponent } from "./components/private/crud/crud.component";
import { DashboardComponent } from "./components/private/dashboard/dashboard.component";
import { GaleriaComponent } from "./components/private/galeria/galeria/galeria.component";
import { ProfileComponent } from "./components/private/profile/profile.component";

//Guards
import { AuthGuardService } from "./guards/auth-guard.service";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "acerca-de", component: AcercaDeComponent },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: "galeria",
    component: GaleriaComponent,
    canActivate: [AuthGuardService],
  },
  { path: "crud", component: CrudComponent, canActivate: [AuthGuardService] },
  {
    path: "profile",
    component: ProfileComponent,
    canActivate: [AuthGuardService],
  },
  { path: "**", component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
