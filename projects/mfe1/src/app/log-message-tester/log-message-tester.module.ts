import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogMessageTesterComponent } from './log-message-tester.component';
import {LogMessageTesterRoutingModule} from "./log-message-tester-routing.module";

@NgModule({
  declarations: [LogMessageTesterComponent],
  imports: [
    CommonModule,
    LogMessageTesterRoutingModule
  ]
})
export class LogMessageTesterModule {}
