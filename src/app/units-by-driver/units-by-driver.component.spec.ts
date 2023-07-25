import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitsByDriverComponent } from './units-by-driver.component';

describe('UnitsByDriverComponent', () => {
  let component: UnitsByDriverComponent;
  let fixture: ComponentFixture<UnitsByDriverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnitsByDriverComponent]
    });
    fixture = TestBed.createComponent(UnitsByDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
