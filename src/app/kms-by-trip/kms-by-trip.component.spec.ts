import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KmsByTripComponent } from './kms-by-trip.component';

describe('KmsByTripComponent', () => {
  let component: KmsByTripComponent;
  let fixture: ComponentFixture<KmsByTripComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KmsByTripComponent]
    });
    fixture = TestBed.createComponent(KmsByTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
