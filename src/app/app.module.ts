import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbNavegacionComponent } from './plantilla/navb-navegacion/navb-navegacion.component';
import { FooterNavegacionComponent } from './plantilla/footer-navegacion/footer-navegacion.component';
import { InicioComponent } from './plantilla/inicio/inicio.component';
import { ErrorComponent } from './plantilla/error/error.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './plantilla/home/home.component';
import { HomeUserComponent } from './plantilla/home-user/home-user.component';
import { HomeAsesorComponent } from './plantilla/home-asesor/home-asesor.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbNavegacionComponent,
    FooterNavegacionComponent,
    InicioComponent,
    ErrorComponent,
    HomeComponent,
    HomeUserComponent,
    HomeAsesorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
