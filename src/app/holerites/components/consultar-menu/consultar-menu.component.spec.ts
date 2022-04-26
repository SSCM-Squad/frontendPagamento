import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarMenuComponent } from './consultar-menu.component';

describe('ConsultarMenuComponent', () => {
  let component: ConsultarMenuComponent;
  let fixture: ComponentFixture<ConsultarMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
