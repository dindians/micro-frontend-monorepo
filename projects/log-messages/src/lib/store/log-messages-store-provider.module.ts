import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {ILogMessagesState} from "./i-log-messages-state";
import {logMessagesStateReducer} from "./log-messages.state.reducer";
import {
  IHOST_HEADER_COMPONENT_INJECTION_TOKEN,
  IHOST_HOME_COMPONENT_INJECTION_TOKEN,
  IHOST_DUMMY_AUTHENTICATION_COMPONENT_INJECTION_TOKEN,
  IMFE1_LOGMESSAGES_COMPONENT_INJECTION_TOKEN,
  IMFE1_LOGMESSAGE_TESTER_COMPONENT_INJECTION_TOKEN
} from "./interfaces"
import {logMessagesStateFeatureName, LogMessagesStore} from "./log-messages.store";

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature<ILogMessagesState>(logMessagesStateFeatureName, logMessagesStateReducer)
  ],
  providers: [
    {provide: IHOST_HEADER_COMPONENT_INJECTION_TOKEN, useExisting: LogMessagesStore},
    {provide: IHOST_HOME_COMPONENT_INJECTION_TOKEN, useExisting: LogMessagesStore},
    {provide: IHOST_DUMMY_AUTHENTICATION_COMPONENT_INJECTION_TOKEN, useExisting: LogMessagesStore},
    {provide: IMFE1_LOGMESSAGES_COMPONENT_INJECTION_TOKEN, useExisting: LogMessagesStore},
    {provide: IMFE1_LOGMESSAGE_TESTER_COMPONENT_INJECTION_TOKEN, useExisting: LogMessagesStore}
  ]
})
export class LogMessagesStoreProviderModule {}
