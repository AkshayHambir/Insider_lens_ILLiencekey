import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainclientsubComponent } from './mainclientsub.component';

describe('MainclientsubComponent', () => {
  let component: MainclientsubComponent;
  let fixture: ComponentFixture<MainclientsubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainclientsubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainclientsubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
