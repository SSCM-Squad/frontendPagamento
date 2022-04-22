import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { IFuncionarios } from './IFuncionarios';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {

  url="http://localhost:8080/api/empresas/funcionarios";

  constructor(private http:HttpClient) { }

  getFuncionarios() :Observable <IFuncionarios[]> {
    return this.http.get<IFuncionarios[]>(this.url);
  }
}
