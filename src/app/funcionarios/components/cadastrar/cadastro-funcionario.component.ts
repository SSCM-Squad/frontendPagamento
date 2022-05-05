import { FuncionarioCadastro } from './../../models/funcionario-cadastro';
import { FuncionariosService } from '../../services/funcionarios.service';
import { Component, OnInit } from '@angular/core';
import { IFuncionario } from '../../models/IFuncionario';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.component.html',
  styleUrls: ['./cadastro-funcionario.component.css']
})

export class CadastroFuncionarioComponent implements OnInit {


  funcionario : FuncionarioCadastro = {} as FuncionarioCadastro;
  funcionarioCompleto: IFuncionario = {} as IFuncionario;

  arrayDeErros : [string, unknown][] = [];

  tipoModal : String = "";


  constructor(private funcionarioService : FuncionariosService) {

  }


  ngOnInit(): void {
  }

  cadastrar(){
    console.log(this.funcionario)
    this.funcionarioService.cadastrarFuncionario(this.funcionario).subscribe((resp: IFuncionario)=>{
      this.funcionarioCompleto = resp;
      this.onSuccess()
    }, httpHerror => this.onError(httpHerror))
  }

  onSuccess(){
    this.tipoModal = "#sucesso"
  }

  onError(httpHerror: any){

    this.tipoModal = "#erroCadastro"

    Object.entries(httpHerror.error.erros).map(([key, value]) => {
      
    });

  }

}
