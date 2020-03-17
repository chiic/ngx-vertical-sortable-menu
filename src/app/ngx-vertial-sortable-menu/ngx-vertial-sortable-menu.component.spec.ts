import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxVertialSortableMenuComponent } from './ngx-vertial-sortable-menu.component';

describe('NgxVertialSortableMenuComponent', () => {
  let component: NgxVertialSortableMenuComponent;
  let fixture: ComponentFixture<NgxVertialSortableMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxVertialSortableMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxVertialSortableMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
