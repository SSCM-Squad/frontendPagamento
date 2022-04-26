import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './components/listar/listar.component';
import { FuncionariosService } from './services/funcionarios.service';
import { CadastroFuncionarioComponent } from './components/cadastrar/cadastro-funcionario.component';
import { PerfilFuncionarioComponent } from './components/perfil/perfil-funcionario.component';
import { AtualizarFuncionarioComponent } from './components/atualizar/atualizar-funcionario.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { PainelEmpresaComponent } from './components/painel-empresa/painel-empresa.component';


@NgModule({
  declarations: [
    ListarComponent,
    CadastroFuncionarioComponent,
    PerfilFuncionarioComponent,
    AtualizarFuncionarioComponent,
    PainelEmpresaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    ListarComponent,
    CadastroFuncionarioComponent,
    PerfilFuncionarioComponent,
    AtualizarFuncionarioComponent
  ],
  providers: [
    FuncionariosService
  ]
})
export class FuncionariosModule { }
