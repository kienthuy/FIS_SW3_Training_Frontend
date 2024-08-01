import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideForgotPwdComponent } from './side-forgot-pwd.component';

describe('SideForgotPwdComponent', () => {
  let component: SideForgotPwdComponent;
  let fixture: ComponentFixture<SideForgotPwdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideForgotPwdComponent]
    });
    fixture = TestBed.createComponent(SideForgotPwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
