import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MystatComponent } from './mystat.component';

describe('MystatComponent', () => {
  let component: MystatComponent;
  let fixture: ComponentFixture<MystatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MystatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MystatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
