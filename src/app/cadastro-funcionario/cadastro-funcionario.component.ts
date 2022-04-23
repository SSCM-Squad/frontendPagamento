import { FuncionariosService } from './../funcionarios/services/funcionarios.service';
import { FuncionarioCadastro } from './../funcionarios/models/funcionario-cadastro';
import { Component, OnInit } from '@angular/core';
import { IFuncionario } from '../funcionarios/models/IFuncionario';


@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.component.html',
  styleUrls: ['./cadastro-funcionario.component.css']
})
export class CadastroFuncionarioComponent implements OnInit {

  funcionario : FuncionarioCadastro = new FuncionarioCadastro()
  funcionarioRetorno : IFuncionario = {} as IFuncionario;

  constructor(private funcionarioService : FuncionariosService) {

  }

  ngOnInit(): void {
  }

  cadastrar(){
    this.funcionarioService.cadastrarFuncionario(this.funcionario).subscribe((resp: IFuncionario)=>{
      this.funcionarioRetorno = resp;
      console.log(this.funcionarioRetorno)
    })
  }

}
