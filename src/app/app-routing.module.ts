import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtualizarFuncionarioComponent } from './funcionarios/components/atualizar/atualizar-funcionario.component';
import { CadastroFuncionarioComponent } from './funcionarios/components/cadastrar/cadastro-funcionario.component';
import { ListarComponent } from './funcionarios/components/listar/listar.component';
import { MenuComponent } from './menu/menu.component';
import { PerfilFuncionarioComponent } from './funcionarios/components/perfil/perfil-funcionario.component';
import { ConsultarMenuComponent } from './holerites/components/consultar-menu/consultar-menu.component';
import { HoleriteComponent } from './holerites/components/holerite/holerite.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'menu'},
  {path:"menu", component: MenuComponent},
  {path:"cadastrar-funcionario", component: CadastroFuncionarioComponent},
  {path:"listar-funcionarios", component: ListarComponent},
  {path:"perfil-funcionario/:id", component: PerfilFuncionarioComponent},
  {path:"editar-funcionario/:id", component: AtualizarFuncionarioComponent},
  {path:"consultar-holerites", component: ConsultarMenuComponent},
  {path:"holerite/:id", component: HoleriteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
