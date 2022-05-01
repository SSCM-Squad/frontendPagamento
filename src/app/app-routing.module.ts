import { ListarHoleritesComponent } from './holerites/components/listar-holerites/listar-holerites.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtualizarFuncionarioComponent } from './funcionarios/components/atualizar/atualizar-funcionario.component';
import { CadastroFuncionarioComponent } from './funcionarios/components/cadastrar/cadastro-funcionario.component';
import { ListarComponent } from './funcionarios/components/listar/listar.component';
import { MenuComponent } from './menu/menu.component';
import { PerfilFuncionarioComponent } from './funcionarios/components/perfil/perfil-funcionario.component';
import { PainelEmpresaComponent } from './funcionarios/components/painel-empresa/painel-empresa.component';
import { HoleriteComponent } from './holerites/components/holerite/holerite.component';
import { ConsultarMenuComponent } from './holerites/components/consultar-menu/consultar-menu.component';
import { GerarHoleriteComponent } from './funcionarios/components/gerar-holerite/gerar-holerite.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'menu'},
  {path:"menu", component: MenuComponent},
  {path:"painel-empresa", component: PainelEmpresaComponent},
  {path:"cadastrar-funcionario", component: CadastroFuncionarioComponent},
  {path:"listar-funcionarios", component: ListarComponent},
  {path:"perfil-funcionario/:id", component: PerfilFuncionarioComponent},
  {path:"editar-funcionario/:id", component: AtualizarFuncionarioComponent},
  {path:"gerar-holerite", component: GerarHoleriteComponent},

  {path:"painel-funcionario", component: ConsultarMenuComponent},
  {path:"listar-holerites/:cpf", component: ListarHoleritesComponent},
  {path:"holerite/:id", component: HoleriteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
