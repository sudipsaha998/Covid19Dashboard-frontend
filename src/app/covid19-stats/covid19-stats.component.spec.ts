import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Covid19StatsComponent } from './covid19-stats.component';

describe('Covid19StatsComponent', () => {
  let component: Covid19StatsComponent;
  let fixture: ComponentFixture<Covid19StatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Covid19StatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Covid19StatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
