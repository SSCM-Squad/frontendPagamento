import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask'


import { FuncionariosService } from './services/funcionarios.service';
import { ListarComponent } from './components/listar/listar.component';
import { CadastroFuncionarioComponent } from './components/cadastrar/cadastro-funcionario.component';
import { PerfilFuncionarioComponent } from './components/perfil/perfil-funcionario.component';
import { AtualizarFuncionarioComponent } from './components/atualizar/atualizar-funcionario.component';
import { PainelEmpresaComponent } from './components/painel-empresa/painel-empresa.component';
import { GerarHoleriteComponent } from './components/gerar-holerite/gerar-holerite.component';


@NgModule({
  declarations: [
    ListarComponent,
    CadastroFuncionarioComponent,
    PerfilFuncionarioComponent,
    AtualizarFuncionarioComponent,
    PainelEmpresaComponent,
    GerarHoleriteComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxMaskModule.forChild()

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
