import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroFuncionarioComponent } from './cadastro-funcionario/cadastro-funcionario.component';
import { ListarComponent } from './funcionarios/components/listar/listar.component';
import { MenuComponent } from './menu/menu.component';
import { PerfilFuncionarioComponent } from './perfil-funcionario/perfil-funcionario.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'menu'},
  {path:"menu", component: MenuComponent},
  {path:"cadastrar-funcionario", component: CadastroFuncionarioComponent},
  {path:"listar-funcionarios", component: ListarComponent},
  {path:"perfil-funcionario/:id", component: PerfilFuncionarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
