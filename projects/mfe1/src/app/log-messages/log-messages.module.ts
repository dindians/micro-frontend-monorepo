import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatIconModule} from "@angular/material/icon";
import {LogMessagesComponent} from './log-messages.component';
import {LogMessagesRoutingModule} from "./log-messages-routing.module";
import {LogMessagesStoreProviderModule} from "../log-messages-store-provider/log-messages-store-provider.module";

@NgModule({
  declarations: [LogMessagesComponent],
  imports: [
    CommonModule,
    LogMessagesRoutingModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    LogMessagesStoreProviderModule
  ]
})
export class LogMessagesModule {}
