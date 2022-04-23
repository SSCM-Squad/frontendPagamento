import { IFuncionario } from './../funcionarios/models/IFuncionario';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FuncionariosService } from '../funcionarios/services/funcionarios.service';

@Component({
  selector: 'app-atualizar-funcionario',
  templateUrl: './atualizar-funcionario.component.html',
  styleUrls: ['./atualizar-funcionario.component.css']
})
export class AtualizarFuncionarioComponent implements OnInit {

  funcionario : IFuncionario = {} as IFuncionario

  constructor(
    private route: ActivatedRoute,
    private funcionarioService: FuncionariosService,
    private router : Router
  ) {

    let idRotaAtiva =  this.route.snapshot.params['id'];
    this.funcionarioService.buscarFuncionario(idRotaAtiva).subscribe((resp: IFuncionario) =>{
      this.funcionario = resp;
    })
  }

  ngOnInit(): void {
  }

  atualizarInformacoes(){
    this.funcionarioService.atualizarFuncionario(this.funcionario.id, this.funcionario).subscribe((resp: IFuncionario) =>{
      this.funcionario = resp
    })

    this.router.navigate(['/perfil-funcionario', this.funcionario.id])
  }

}