import { IFuncionario } from './../../models/IFuncionario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-painel-empresa',
  templateUrl: './painel-empresa.component.html',
  styleUrls: ['./painel-empresa.component.css']
})
export class PainelEmpresaComponent implements OnInit {


  funcionarioCpf : string = ""

  funcionarioEncontrado : IFuncionario = {} as IFuncionario

  constructor() { }

  ngOnInit(): void {
  }

}
