import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";
import {LogMessageTesterComponent} from './log-message-tester.component';
import {LogMessageTesterRoutingModule} from "./log-message-tester-routing.module";
import {LogMessagesStoreProviderModule} from "../log-messages-store-provider/log-messages-store-provider.module";

@NgModule({
  declarations: [LogMessageTesterComponent],
  imports: [
    CommonModule,
    LogMessageTesterRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    LogMessagesStoreProviderModule
  ]
})
export class LogMessageTesterModule {}
