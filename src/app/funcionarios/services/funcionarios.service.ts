import { FuncionarioCadastro } from './../models/funcionario-cadastro';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { IFuncionario } from '../models/IFuncionario';


@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {

  readonly API="http://localhost:8080/api/empresas";

  constructor(private http:HttpClient) { }

  getFuncionarios() :Observable <IFuncionario[]> {
    return this.http.get<IFuncionario[]>(this.API + "/funcionarios");
  }

  buscarFuncionario(idFuncionario: number) :Observable <IFuncionario> {
    return this.http.get<IFuncionario>(`${this.API}/funcionario/${idFuncionario}`);
  }

  cadastrarFuncionario(funcionario: FuncionarioCadastro): Observable<IFuncionario>{
    return this.http.post<IFuncionario>(`${this.API}/cadastrar-funcionario`, funcionario);
  }

  atualizarFuncionario(idFuncionario: number, funcionario: IFuncionario): Observable<IFuncionario>{
    return this.http.put<IFuncionario>(`${this.API}/atualizar-funcionario/${idFuncionario}`, funcionario);
  }
}


