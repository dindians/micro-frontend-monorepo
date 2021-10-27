import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";
import {StoreModule} from "@ngrx/store";
import {LogMessageTesterComponent} from './log-message-tester.component';
import {LogMessageTesterRoutingModule} from "./log-message-tester-routing.module";
import {ILogMessagesState, logMessagesStateFeatureName, logMessagesStateReducer} from "@lib/log-messages";

@NgModule({
  declarations: [LogMessageTesterComponent],
  imports: [
    CommonModule,
    LogMessageTesterRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    StoreModule.forFeature<ILogMessagesState>(logMessagesStateFeatureName, logMessagesStateReducer)
  ]
})
export class LogMessageTesterModule {}
