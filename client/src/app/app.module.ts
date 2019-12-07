import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ContentHomeComponent } from './login/content-home/content-home.component';
import { ContentCadastroComponent } from './login/content-cadastro/content-cadastro.component';
import { ContentLoginComponent } from './login/content-login/content-login.component';
import { ReactiveFormsModule} from '@angular/forms'
import { HttpModule } from "@angular/http";
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './template/header/header.component';
import { MestreComponent } from './home/mestre/mestre.component'
import { RouterGuard } from './app.router-guard';
import { UserComponent } from './home/user/user.component';
import { TableDetailsComponent } from './home/mestre/table-details/table-details.component';
import { TablesComponent } from './home/user/tables/tables.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContentHomeComponent,
    ContentCadastroComponent,
    ContentLoginComponent,
    HomeComponent,
    HeaderComponent,
    MestreComponent,
    UserComponent,
    TableDetailsComponent,
    TablesComponent
  ],
  imports: [
    SweetAlert2Module.forRoot(),
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [ RouterGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
