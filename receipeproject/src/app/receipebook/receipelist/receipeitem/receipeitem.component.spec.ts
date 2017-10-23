import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceipeitemComponent } from './receipeitem.component';

describe('ReceipeitemComponent', () => {
  let component: ReceipeitemComponent;
  let fixture: ComponentFixture<ReceipeitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceipeitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceipeitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
