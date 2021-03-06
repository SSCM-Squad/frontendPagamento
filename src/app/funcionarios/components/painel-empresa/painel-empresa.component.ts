import { FuncionariosService } from './../../services/funcionarios.service';
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

  constructor(
    private funcionarioService : FuncionariosService
  ) { }

  ngOnInit(): void {
  }

  pesquisarUsuario(){
    this.funcionarioService.buscarFuncionarioPorCpf(this.funcionarioCpf).subscribe((resp: IFuncionario) =>{
      this.funcionarioEncontrado = resp;
    },
      httpError => alert(httpError.error.erro)
    )
  }

  existeFuncionario() : boolean{
    return !(this.funcionarioEncontrado === undefined ||
       this.funcionarioEncontrado === null ||
       Object.keys(this.funcionarioEncontrado).length === 0)
  }


}
