import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoChartComponent } from './demo-chart.component';

describe('DemoChartComponent', () => {
  let component: DemoChartComponent;
  let fixture: ComponentFixture<DemoChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoChartComponent]
    });
    fixture = TestBed.createComponent(DemoChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
