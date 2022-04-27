import { IHoleriteListagem } from './../../models/i-holerite-listagem';
import { HoleritesService } from './../../services/holerites.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listar-holerites',
  templateUrl: './listar-holerites.component.html',
  styleUrls: ['./listar-holerites.component.css']
})
export class ListarHoleritesComponent implements OnInit {

  holerites! : IHoleriteListagem[]
  cpfRotaAtiva : string = ""

  constructor(
    private route: ActivatedRoute,
    private holeriteService: HoleritesService
  ) {

    this.cpfRotaAtiva = this.route.snapshot.params['cpf']

    this.holeriteService.consultarHoleritesPorCpf(this.cpfRotaAtiva).subscribe((resp: IHoleriteListagem[]) => {
      this.holerites = resp;
    })
  }

  ngOnInit(): void {
  }

}
