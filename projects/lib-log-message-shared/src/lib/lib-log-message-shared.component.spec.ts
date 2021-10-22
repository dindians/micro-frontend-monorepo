import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibLogMessageSharedComponent } from './lib-log-message-shared.component';

describe('LibLogMessageSharedComponent', () => {
  let component: LibLogMessageSharedComponent;
  let fixture: ComponentFixture<LibLogMessageSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibLogMessageSharedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibLogMessageSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
