import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerarHoleriteComponent } from './gerar-holerite.component';

describe('GerarHoleriteComponent', () => {
  let component: GerarHoleriteComponent;
  let fixture: ComponentFixture<GerarHoleriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerarHoleriteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GerarHoleriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
