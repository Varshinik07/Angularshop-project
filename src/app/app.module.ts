import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ImagesComponent } from './images/images.component';
import { AddtocartComponent } from './addtocart/addtocart.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavbarComponent,
    HomeComponent,
    ImagesComponent,
    AddtocartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
