import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MycountrydoughnutComponent } from './mycountrydoughnut.component';

describe('MycountrydoughnutComponent', () => {
  let component: MycountrydoughnutComponent;
  let fixture: ComponentFixture<MycountrydoughnutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MycountrydoughnutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MycountrydoughnutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
