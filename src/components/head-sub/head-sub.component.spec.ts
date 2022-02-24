import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadSubComponent } from './head-sub.component';

describe('HeadSubComponent', () => {
  let component: HeadSubComponent;
  let fixture: ComponentFixture<HeadSubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadSubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
