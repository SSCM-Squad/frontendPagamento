import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FuncionariosModule } from './funcionarios/funcionarios.module';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HoleritesModule } from './holerites/holerites.module';

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
    FormsModule,
    HoleritesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
