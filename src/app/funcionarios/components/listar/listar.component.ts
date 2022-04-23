import { IFuncionario } from './../../models/IFuncionario';
import { Component, OnInit } from '@angular/core';
import { FuncionariosService } from '../../services/funcionarios.service';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  funcionarios : IFuncionario[] = {} as IFuncionario[];

  constructor(private funcionariosService:FuncionariosService) {
    this.funcionariosService.getFuncionarios().subscribe((resp: IFuncionario[]) => {
      this.funcionarios = resp;
    })
   }

  ngOnInit(): void {

  }

}
