import { FuncionariosService } from '../../services/funcionarios.service';
import { FuncionarioCadastro } from '../../models/funcionario-cadastro';
import { Component, OnInit } from '@angular/core';
import { IFuncionario } from '../../models/IFuncionario';


@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.component.html',
  styleUrls: ['./cadastro-funcionario.component.css']
})
export class CadastroFuncionarioComponent implements OnInit {

  // funcionario : FuncionarioCadastro = new FuncionarioCadastro()
  funcionario : IFuncionario = {} as IFuncionario;

  constructor(private funcionarioService : FuncionariosService) {

  }

  ngOnInit(): void {
  }

  cadastrar(){
    this.funcionarioService.cadastrarFuncionario(this.funcionario).subscribe((resp: IFuncionario)=>{
      this.funcionario = resp;
      console.log(this.funcionario)
    })
  }

}
