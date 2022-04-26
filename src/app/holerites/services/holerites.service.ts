import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HoleritesService {

  readonly API="http://localhost:8080/api/holerites";

  constructor(private http:HttpClient) { }

  getHoleriteById(idHolerite: number) : Observable<any> {
    return this.http.get(`${this.API}/${idHolerite}`);
  }
}
