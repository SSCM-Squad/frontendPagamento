import { IFuncionario } from './../../models/IFuncionario';
import { Component, OnInit } from '@angular/core';
import { FuncionariosService } from '../../services/funcionarios.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  funcionarios :  IFuncionario[] = {} as IFuncionario[];

  constructor(
      private funcionariosService:FuncionariosService, private location: Location
  ){

    this.funcionariosService.getFuncionarios().subscribe((resp: IFuncionario[]) => {
      this.funcionarios = resp;
    })

  }

  ngOnInit(): void {

  }

  back(): void {
    this.location.back()
  }

}
