import { IHolerite } from './../../../holerites/models/IHolerite';
import { HoleritesService } from './../../../holerites/services/holerites.service';
import { Component, OnInit } from '@angular/core';
import { isNull } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-gerar-holerite',
  templateUrl: './gerar-holerite.component.html',
  styleUrls: ['./gerar-holerite.component.css']
})
export class GerarHoleriteComponent implements OnInit {

  identificador!: number ;
  data : string = "";

  holeriteGerado : IHolerite = {} as IHolerite;

  constructor(
    private holeriteService: HoleritesService
  ) {

  }

  ngOnInit(): void {
  }

  gerarHolerite(){
    this.holeriteService.gerarHolerite(this.identificador, this.data).subscribe((resp: IHolerite)=>{
        this.holeriteGerado = resp
    })
  }

  existeHolerite() : boolean{
    return !(this.holeriteGerado === undefined ||
       this.holeriteGerado === null ||
       Object.keys(this.holeriteGerado).length === 0)
  }

}
