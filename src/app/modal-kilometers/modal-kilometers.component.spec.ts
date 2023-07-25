import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalKilometersComponent } from './modal-kilometers.component';

describe('ModalKilometersComponent', () => {
  let component: ModalKilometersComponent;
  let fixture: ComponentFixture<ModalKilometersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalKilometersComponent]
    });
    fixture = TestBed.createComponent(ModalKilometersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
