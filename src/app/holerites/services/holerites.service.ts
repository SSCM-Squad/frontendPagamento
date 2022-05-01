import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IHoleriteListagem } from '../models/i-holerite-listagem';
import { IHolerite } from '../models/IHolerite';

@Injectable({
  providedIn: 'root'
})
export class HoleritesService {


  readonly API="http://localhost:8080/api/holerites";

  constructor(private http:HttpClient) { }

  getHoleriteById(idHolerite: number) : Observable<IHolerite> {
    return this.http.get<IHolerite>(`${this.API}/${idHolerite}`);
  }

  consultarHolerite(funcionarioCpf: string, data: string) : Observable<IHolerite> {
    return this.http.get<IHolerite>(`${this.API}/consultar-holerite/cpf=${funcionarioCpf}&data=${data}`)
  }

  consultarHoleritesPorCpf(funcionarioCpf: string) : Observable<IHoleriteListagem[]> {
    return this.http.get<IHoleriteListagem[]>(`${this.API}/consultar-holerites/${funcionarioCpf}`)
  }

  gerarHolerite(identificadorFuncionario: number, dataHolerite: string) : Observable<IHolerite>{

    return this.http.post<IHolerite>(`${this.API}/gerar-holerite/${identificadorFuncionario}&${dataHolerite}`, null)
  }


}
