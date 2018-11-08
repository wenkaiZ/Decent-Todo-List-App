import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppItemListComponent } from './app-item-list.component';

describe('AppItemListComponent', () => {
  let component: AppItemListComponent;
  let fixture: ComponentFixture<AppItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppItemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
