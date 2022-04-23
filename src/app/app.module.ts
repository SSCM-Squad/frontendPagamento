import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { FuncionariosModule } from './funcionarios/funcionarios.module';
import { MenuComponent } from './menu/menu.component';
import { CadastroFuncionarioComponent } from './funcionarios/components/cadastrar/cadastro-funcionario.component';
import { FormsModule } from '@angular/forms';
import { PerfilFuncionarioComponent } from './funcionarios/components/perfil/perfil-funcionario.component';
import { AtualizarFuncionarioComponent } from './funcionarios/components/atualizar/atualizar-funcionario.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
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
