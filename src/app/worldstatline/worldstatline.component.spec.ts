import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldstatlineComponent } from './worldstatline.component';

describe('WorldstatlineComponent', () => {
  let component: WorldstatlineComponent;
  let fixture: ComponentFixture<WorldstatlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldstatlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldstatlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
