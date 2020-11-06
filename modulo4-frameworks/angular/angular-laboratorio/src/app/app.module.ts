import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

//Formularios angular
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

//Routing
import { AppRoutingModule } from "./app-routing.module";

//Componentes comunes
import { HeaderComponent } from "./components/common/header/header.component";
import { NavComponent } from "./components/common/nav/nav.component";
import { BodyComponent } from "./components/common/body/body.component";
import { FooterComponent } from "./components/common/footer/footer.component";

//Componentes publicos
import { HomeComponent } from "./components/public/home/home.component";
import { LoginComponent } from "./components/public/login/login.component";
import { GaleriaComponent } from "./components/private/galeria/galeria/galeria.component";
import { ControlesComponent } from "./components/private/galeria/controles/controles.component";
import { ImagesComponent } from "./components/private/galeria/images/images.component";
import { AcercaDeComponent } from "./components/public/acerca-de/acerca-de.component";

//Componentes privados
import { DashboardComponent } from "./components/private/dashboard/dashboard.component";
import { CrudComponent } from "./components/private/crud/crud.component";
import { ProfileComponent } from "./components/private/profile/profile.component";

//Componentes angular
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    BodyComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    AcercaDeComponent,
    DashboardComponent,
    GaleriaComponent,
    CrudComponent,
    ProfileComponent,
    ControlesComponent,
    ImagesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatSnackBarModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
