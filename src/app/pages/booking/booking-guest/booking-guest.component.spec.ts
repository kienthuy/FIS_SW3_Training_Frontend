import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingGuestComponent } from './booking-guest.component';

describe('BookingComponent', () => {
  let component: BookingGuestComponent;
  let fixture: ComponentFixture<BookingGuestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookingGuestComponent]
    });
    fixture = TestBed.createComponent(BookingGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
