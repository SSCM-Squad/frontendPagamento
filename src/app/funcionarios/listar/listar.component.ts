import { Component, OnInit } from '@angular/core';
import { FuncionariosService } from '../funcionarios.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  funcionarios = [];

  constructor(private funcionariosService:FuncionariosService) { }

  ngOnInit(): void {
    this.funcionariosService.getFuncionarios().subscribe(data => {
      console.log(data);
    })
  }

}
