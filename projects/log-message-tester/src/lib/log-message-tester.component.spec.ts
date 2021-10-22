import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogMessageTesterComponent } from './log-message-tester.component';

describe('LogMessageTesterComponent', () => {
  let component: LogMessageTesterComponent;
  let fixture: ComponentFixture<LogMessageTesterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogMessageTesterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogMessageTesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
