import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatIconModule} from "@angular/material/icon";
import {StoreModule} from "@ngrx/store";
import {LogMessagesComponent} from './log-messages.component';
import {LogMessagesRoutingModule} from "./log-messages-routing.module";
import {ILogMessagesState, logMessagesStateFeatureName, logMessagesStateReducer} from "@lib/log-messages";

@NgModule({
  declarations: [LogMessagesComponent],
  imports: [
    CommonModule,
    LogMessagesRoutingModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    StoreModule.forFeature<ILogMessagesState>(logMessagesStateFeatureName, logMessagesStateReducer)
  ]
})
export class LogMessagesModule {}
