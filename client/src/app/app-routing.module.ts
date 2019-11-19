import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from "./login/login.component"
import {ContentHomeComponent} from "./login/content-home/content-home.component"
import { ContentLoginComponent } from "./login/content-login/content-login.component"
import { ContentCadastroComponent} from "./login/content-cadastro/content-cadastro.component";
import { HomeComponent } from "./home/home.component";
import { RouterGuard } from "./app.router-guard"
import { TableDetailsComponent } from './home/mestre/table-details/table-details.component';

const index = localStorage.getItem('event_token') ? HomeComponent : LoginComponent;

const routes: Routes = [
  {
    path: "", component: LoginComponent,
  children:[
    { path: "", component: ContentHomeComponent},
    { path:"login", component:ContentLoginComponent },
    { path: "cadastro", component: ContentCadastroComponent }
  ]},
  { path: "home", component: HomeComponent, canActivate: [RouterGuard]},
  { path: "table/:id", component: TableDetailsComponent, canActivate: [RouterGuard] }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
