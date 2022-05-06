import { FuncionarioCadastro } from './../../models/funcionario-cadastro';
import { FuncionariosService } from '../../services/funcionarios.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IFuncionario } from '../../models/IFuncionario';




@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.component.html',
  styleUrls: ['./cadastro-funcionario.component.css']
})

export class CadastroFuncionarioComponent implements OnInit {


  funcionario : FuncionarioCadastro = {} as FuncionarioCadastro;
  funcionarioCompleto: IFuncionario = {} as IFuncionario;

  arrayErros: any = [];

  successDisplay = "none";
  errorDisplay = "none";

  constructor(private funcionarioService : FuncionariosService) {
  }


  ngOnInit(): void {
  }

  // modal de sucesso
  showSucessModal() {
    this.successDisplay = "block";
  }
  closeSuccessModal() {
    this.successDisplay = "none";
  }

  // modal de erro
  showErrorModal() {
    this.errorDisplay = "block";
  }
  closeErrorModal() {
    this.errorDisplay = "none";
  }

  cadastrar(){
    console.log(this.funcionario)

    this.funcionarioService.cadastrarFuncionario(this.funcionario).subscribe((resp: IFuncionario)=>{
      this.funcionarioCompleto = resp;
      this.showSucessModal();
    }, httpHerror => this.onError(httpHerror))

    this.arrayErros = [];
  }

  onError(httpHerror: any){

    this.showErrorModal();

    Object.entries(httpHerror.error.erros).map(([key, value]) => {
      this.arrayErros.push([key, value]);
    });

  }
}
