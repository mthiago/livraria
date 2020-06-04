import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FilterPipe} from './filter.pipe';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ListaComponent } from './lista/lista.component';
import { ListaService } from './service/lista.service';
import { LoginService } from './service/login.service';
import { GerenciadorComponent } from './service/gerenciador/gerenciador.component';
import { DataService } from './service/data.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    ListaComponent,
    GerenciadorComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ListaService, LoginService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
