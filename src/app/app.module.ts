import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ImagesComponent } from './images/images.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { LoginComponent } from './login/login.component';
import {RouterModule,Routes} from '@angular/router';

const appRoutes:Routes=[
  {
    path:"",component:IndexComponent
  },
  {
    path:"home",component:HomeComponent
  },
  {
    path:"images",component:ImagesComponent
  },
  {
    path:"addtocart",component:AddtocartComponent
  },
  {
    path:"login",component:LoginComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavbarComponent,
    HomeComponent,
    ImagesComponent,
    AddtocartComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
