import { Component, OnInit } from '@angular/core';
import { HoleritesService } from '../../services/holerites.service';
import { FormsModule } from '@angular/forms';
import { IHolerite } from '../../models/IHolerite';

@Component({
  selector: 'app-consultar-menu',
  templateUrl: './consultar-menu.component.html',
  styleUrls: ['./consultar-menu.component.css']
})
export class ConsultarMenuComponent implements OnInit {

  funcionarioCpf : string = ""

  data : string = "";

  holeriteGerado : IHolerite = {} as IHolerite;

  constructor(
    private holeriteService: HoleritesService
  ){

  }

  ngOnInit(): void {
  }


  gerarHolerite(){
    this.holeriteService.consultarHolerite(this.funcionarioCpf, this.data).subscribe((resp: IHolerite)=>{
        this.holeriteGerado = resp
    })
  }

  existeHolerite() : boolean{
    return !(this.holeriteGerado === undefined ||
       this.holeriteGerado === null ||
       Object.keys(this.holeriteGerado).length === 0)
  }

}
