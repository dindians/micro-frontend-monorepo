import { NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {logMessagesStateReducer} from "./log-messages.state.reducer";
import {logMessagesStateName} from "../model/i-log-messages-state";
import {LogMessageService} from "./log-message.service";
import {
  ILOG_MESSAGE_SERVICE_FOR_HOST_HEADER_COMPONENT_INJECTION_TOKEN,
  ILOG_MESSAGE_SERVICE_FOR_HOST_DUMMY_AUTHENTICATION_COMPONENT_INJECTION_TOKEN,
  ILOG_MESSAGE_SERVICE_FOR_HOST_HOME_COMPONENT_INJECTION_TOKEN,
  ILOG_MESSAGE_SERVICE_FOR_MFE1_LOGMESSAGE_TESTER_COMPONENT_INJECTION_TOKEN,
  ILOG_MESSAGE_SERVICE_FOR_MFE1_LOGMESSAGES_COMPONENT_INJECTION_TOKEN,
  ILogMessagesState
} from "@lib/log-messages";

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature<ILogMessagesState>(logMessagesStateName(), logMessagesStateReducer)
  ],
  providers: [
    {provide: ILOG_MESSAGE_SERVICE_FOR_HOST_HOME_COMPONENT_INJECTION_TOKEN, useExisting: LogMessageService},
    {provide: ILOG_MESSAGE_SERVICE_FOR_HOST_HEADER_COMPONENT_INJECTION_TOKEN, useExisting: LogMessageService},
    {provide: ILOG_MESSAGE_SERVICE_FOR_HOST_DUMMY_AUTHENTICATION_COMPONENT_INJECTION_TOKEN, useExisting: LogMessageService},
    {provide: ILOG_MESSAGE_SERVICE_FOR_MFE1_LOGMESSAGES_COMPONENT_INJECTION_TOKEN, useExisting: LogMessageService},
    {provide: ILOG_MESSAGE_SERVICE_FOR_MFE1_LOGMESSAGE_TESTER_COMPONENT_INJECTION_TOKEN, useExisting: LogMessageService}
  ]
})
export class LogMessageServiceProviderModule {}
