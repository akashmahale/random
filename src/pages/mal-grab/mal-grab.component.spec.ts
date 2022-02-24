import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MalGrabComponent } from './mal-grab.component';

describe('MalGrabComponent', () => {
  let component: MalGrabComponent;
  let fixture: ComponentFixture<MalGrabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MalGrabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MalGrabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
