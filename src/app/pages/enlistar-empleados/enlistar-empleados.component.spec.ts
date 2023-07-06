import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnlistarEmpleadosComponent } from './enlistar-empleados.component';

describe('EnlistarEmpleadosComponent', () => {
  let component: EnlistarEmpleadosComponent;
  let fixture: ComponentFixture<EnlistarEmpleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnlistarEmpleadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnlistarEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
