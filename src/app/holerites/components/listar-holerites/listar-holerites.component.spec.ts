import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarHoleritesComponent } from './listar-holerites.component';

describe('ListarHoleritesComponent', () => {
  let component: ListarHoleritesComponent;
  let fixture: ComponentFixture<ListarHoleritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarHoleritesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarHoleritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
