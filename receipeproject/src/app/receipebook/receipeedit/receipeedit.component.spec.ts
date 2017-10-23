import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceipeeditComponent } from './receipeedit.component';

describe('ReceipeeditComponent', () => {
  let component: ReceipeeditComponent;
  let fixture: ComponentFixture<ReceipeeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceipeeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceipeeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
