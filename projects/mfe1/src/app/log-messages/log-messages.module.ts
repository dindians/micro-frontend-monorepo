import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LogMessagesComponent} from './log-messages.component';
import {LogMessagesRoutingModule} from "./log-messages-routing.module";

@NgModule({
  declarations: [LogMessagesComponent],
  imports: [
    CommonModule,
    LogMessagesRoutingModule
  ]
})
export class LogMessagesModule {}
