import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceipedetailsComponent } from './receipedetails.component';

describe('ReceipedetailsComponent', () => {
  let component: ReceipedetailsComponent;
  let fixture: ComponentFixture<ReceipedetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceipedetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceipedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
