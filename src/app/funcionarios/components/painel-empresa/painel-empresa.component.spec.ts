import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelEmpresaComponent } from './painel-empresa.component';

describe('PainelEmpresaComponent', () => {
  let component: PainelEmpresaComponent;
  let fixture: ComponentFixture<PainelEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PainelEmpresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
