import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostDriverComponent } from './cost-driver.component';

describe('CostDriverComponent', () => {
  let component: CostDriverComponent;
  let fixture: ComponentFixture<CostDriverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CostDriverComponent]
    });
    fixture = TestBed.createComponent(CostDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
