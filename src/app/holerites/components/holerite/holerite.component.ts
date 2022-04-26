import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HoleritesService } from '../../services/holerites.service';

@Component({
  selector: 'app-holerite',
  templateUrl: './holerite.component.html',
  styleUrls: ['./holerite.component.css']
})
export class HoleriteComponent implements OnInit {

  holerite!: any;
  idRotaAtiva =  this.route.snapshot.params['id'];

  constructor(
    private route: ActivatedRoute,
    private holeritesService: HoleritesService,
    private router : Router
  ) {
    this.holeritesService.getHoleriteById(this.idRotaAtiva).subscribe((resp: any) =>{
      this.holerite = resp;
      console.log(this.holerite.id);
    })
  }

  ngOnInit(): void {
  }

}
