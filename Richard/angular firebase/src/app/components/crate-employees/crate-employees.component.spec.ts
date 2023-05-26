import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrateEmployeesComponent } from './crate-employees.component';

describe('CrateEmployeesComponent', () => {
  let component: CrateEmployeesComponent;
  let fixture: ComponentFixture<CrateEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrateEmployeesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrateEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
