import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TogelComponent } from './togel.component';

describe('TogelComponent', () => {
  let component: TogelComponent;
  let fixture: ComponentFixture<TogelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TogelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TogelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
