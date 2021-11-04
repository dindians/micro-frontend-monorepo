import { NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {LogMessagesInteraction, logMessagesStateFeatureName} from "./log-messages-interaction";
import {logMessagesStateReducer} from "./log-messages.state.reducer";
import {
  IHOST_HEADER_COMPONENT_INJECTION_TOKEN,
  IHOST_DUMMY_AUTHENTICATION_COMPONENT_INJECTION_TOKEN,
  IHOST_HOME_COMPONENT_INJECTION_TOKEN,
  IMFE1_LOGMESSAGE_TESTER_COMPONENT_INJECTION_TOKEN,
  IMFE1_LOGMESSAGES_COMPONENT_INJECTION_TOKEN,
  ILogMessagesState
} from "@lib/log-messages";


@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature<ILogMessagesState>(logMessagesStateFeatureName, logMessagesStateReducer)
  ],
  providers: [
    {provide: IHOST_HEADER_COMPONENT_INJECTION_TOKEN, useExisting: LogMessagesInteraction},
    {provide: IHOST_HOME_COMPONENT_INJECTION_TOKEN, useExisting: LogMessagesInteraction},
    {provide: IHOST_DUMMY_AUTHENTICATION_COMPONENT_INJECTION_TOKEN, useExisting: LogMessagesInteraction},
    {provide: IMFE1_LOGMESSAGES_COMPONENT_INJECTION_TOKEN, useExisting: LogMessagesInteraction},
    {provide: IMFE1_LOGMESSAGE_TESTER_COMPONENT_INJECTION_TOKEN, useExisting: LogMessagesInteraction}
  ]
})
export class LogMessagesInteractionModule {}
