import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { FuncionariosModule } from './funcionarios/funcionarios.module';
import { MenuComponent } from './menu/menu.component';
import { CadastroFuncionarioComponent } from './cadastro-funcionario/cadastro-funcionario.component';
import { FormsModule } from '@angular/forms';
import { PerfilFuncionarioComponent } from './perfil-funcionario/perfil-funcionario.component';
import { AtualizarFuncionarioComponent } from './atualizar-funcionario/atualizar-funcionario.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CadastroFuncionarioComponent,
    PerfilFuncionarioComponent,
    AtualizarFuncionarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FuncionariosModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
