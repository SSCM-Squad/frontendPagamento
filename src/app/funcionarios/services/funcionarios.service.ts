import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { IFuncionario } from '../models/IFuncionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {

  url="http://localhost:8080/api/empresas/funcionarios";

  constructor(private http:HttpClient) { }

  getFuncionarios() :Observable <IFuncionario[]> {
    return this.http.get<IFuncionario[]>(this.url);
  }
}
