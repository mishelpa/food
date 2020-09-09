import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageResetLoginComponent } from './page-reset-login.component';

describe('PageResetLoginComponent', () => {
  let component: PageResetLoginComponent;
  let fixture: ComponentFixture<PageResetLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageResetLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageResetLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
