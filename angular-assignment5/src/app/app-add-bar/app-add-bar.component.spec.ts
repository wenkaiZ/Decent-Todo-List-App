import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAddBarComponent } from './app-add-bar.component';

describe('AppAddBarComponent', () => {
  let component: AppAddBarComponent;
  let fixture: ComponentFixture<AppAddBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppAddBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAddBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
