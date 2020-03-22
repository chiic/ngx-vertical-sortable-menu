import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxVerticalSortableMenuComponent } from './ngx-vertical-sortable-menu.component';

describe('NgxVerticalSortableMenuComponent', () => {
  let component: NgxVerticalSortableMenuComponent;
  let fixture: ComponentFixture<NgxVerticalSortableMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxVerticalSortableMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxVerticalSortableMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
