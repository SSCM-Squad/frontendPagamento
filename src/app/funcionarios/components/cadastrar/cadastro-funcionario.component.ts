import { FuncionarioCadastro } from './../../models/funcionario-cadastro';
import { FuncionariosService } from '../../services/funcionarios.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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

  arrayErros: any = [];

  tipoModal : String = "";

  // @ViewChild('modalSucesso') modalSucesso!: ElementRef;


  constructor(private funcionarioService : FuncionariosService) {
  }


  ngOnInit(): void {
  }

  // abrirModalSucesso() {
  //   this.modalSucesso.nativeElement.className = 'modal fade show';
  // }

  cadastrar(){
    console.log(this.funcionario)

    // this.tipoModal = "";

    this.funcionarioService.cadastrarFuncionario(this.funcionario).subscribe((resp: IFuncionario)=>{
      this.funcionarioCompleto = resp;
      this.onSuccess();
    }, httpHerror => this.onError(httpHerror))

    this.arrayErros = [];
  }

  onSuccess(){
    this.tipoModal = "#sucesso"
  }

  onError(httpHerror: any){

    this.tipoModal = "#erroCadastro"

    Object.entries(httpHerror.error.erros).map(([key, value]) => {
      this.arrayErros.push([key, value]);
    });

  }

}
