import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './components/listar/listar.component';
import { FuncionariosService } from './services/funcionarios.service';


@NgModule({
  declarations: [
    ListarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListarComponent
  ],
  providers: [
    FuncionariosService
  ]
})
export class FuncionariosModule { }
