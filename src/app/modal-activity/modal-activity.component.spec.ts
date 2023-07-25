import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalActivityComponent } from './modal-activity.component';

describe('ModalActivityComponent', () => {
  let component: ModalActivityComponent;
  let fixture: ComponentFixture<ModalActivityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalActivityComponent]
    });
    fixture = TestBed.createComponent(ModalActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
