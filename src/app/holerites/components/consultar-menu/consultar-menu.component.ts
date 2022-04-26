import { Component, OnInit } from '@angular/core';
import { HoleritesService } from '../../services/holerites.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-consultar-menu',
  templateUrl: './consultar-menu.component.html',
  styleUrls: ['./consultar-menu.component.css']
})
export class ConsultarMenuComponent implements OnInit {

  holeriteId: any;

  constructor(private holeritesService: HoleritesService) {

  }

  ngOnInit(): void {
  }

}
