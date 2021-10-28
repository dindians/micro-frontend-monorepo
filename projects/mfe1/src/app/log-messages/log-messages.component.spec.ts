import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogMessagesComponent } from './log-messages.component';

describe('LogMessagesComponent', () => {
  let component: LogMessagesComponent;
  let fixture: ComponentFixture<LogMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogMessagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
