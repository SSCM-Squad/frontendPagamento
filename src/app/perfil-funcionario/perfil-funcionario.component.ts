import { IFuncionario } from './../funcionarios/models/IFuncionario';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FuncionariosService } from '../funcionarios/services/funcionarios.service';

@Component({
  selector: 'app-perfil-funcionario',
  templateUrl: './perfil-funcionario.component.html',
  styleUrls: ['./perfil-funcionario.component.css']
})
export class PerfilFuncionarioComponent implements OnInit {

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

  irParaEdicaoFuncionario(){
    this.router.navigate(['/editar-funcionario', this.funcionario.id])
  }

}
