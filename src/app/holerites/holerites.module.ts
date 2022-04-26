import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultarMenuComponent } from './components/consultar-menu/consultar-menu.component';
import { HoleriteComponent } from './components/holerite/holerite.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    ConsultarMenuComponent,
    HoleriteComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [
    ConsultarMenuComponent,
    HoleriteComponent
  ]
})
export class HoleritesModule { }