import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {
  ILOGMESSAGES_CONTEXT_INJECTION_TOKEN, ILOGMESSAGE_ADDER_INJECTION_TOKEN, ILOGMESSAGE_DELETER_INJECTION_TOKEN, logMessagesStateFeatureName,
  ILogMessagesState, logMessagesStateReducer, LogMessagesStore
} from "@lib/log-messages";

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature<ILogMessagesState>(logMessagesStateFeatureName, logMessagesStateReducer)
  ],
  providers: [
    {provide: ILOGMESSAGES_CONTEXT_INJECTION_TOKEN, useExisting: LogMessagesStore},
    {provide: ILOGMESSAGE_ADDER_INJECTION_TOKEN, useExisting: LogMessagesStore},
    {provide: ILOGMESSAGE_DELETER_INJECTION_TOKEN, useExisting: LogMessagesStore}
  ]
})
export class LogMessagesStoreProviderModule {}
