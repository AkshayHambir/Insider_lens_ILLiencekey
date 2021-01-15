import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientdetalisComponent } from './clientdetalis.component';

describe('ClientdetalisComponent', () => {
  let component: ClientdetalisComponent;
  let fixture: ComponentFixture<ClientdetalisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientdetalisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientdetalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
