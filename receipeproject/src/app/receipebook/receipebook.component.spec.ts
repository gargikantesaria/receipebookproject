import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceipebookComponent } from './receipebook.component';

describe('ReceipebookComponent', () => {
  let component: ReceipebookComponent;
  let fixture: ComponentFixture<ReceipebookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceipebookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceipebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
