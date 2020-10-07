import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRouterComponent } from './show-router.component';

describe('ShowRouterComponent', () => {
  let component: ShowRouterComponent;
  let fixture: ComponentFixture<ShowRouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowRouterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
