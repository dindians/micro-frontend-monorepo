import {Injectable, InjectionToken, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {createFeatureSelector, createSelector, select, Store, StoreModule} from "@ngrx/store";
import {map} from "rxjs/operators";
import {combineLatest, Observable} from "rxjs";
import {addLogMessage, deleteLogMessage, deleteLogMessages, logMessagesStateReducer} from "./log-messages.state.reducer";
import {LogMessage, ILogMessagesState} from "@lib/log-messages";

const logMessagesStateFeatureName = 'logMessagesState';

const logMessagesFeatureSelector = createFeatureSelector<ILogMessagesState>(logMessagesStateFeatureName)
const logMessagesSelector = createSelector(logMessagesFeatureSelector, state => state.logMessages)
const logMessagesLengthSelector = createSelector(logMessagesSelector, logMessages => logMessages.length);

const hostHeaderComponentContext = (store: Store<ILogMessagesState>) => store.pipe(select(logMessagesLengthSelector)).pipe(map((length) => { return { logMessagesLength: length }}));
const mfe1LogMessagesComponentContext = (store: Store<ILogMessagesState>) => combineLatest([store.pipe(select(logMessagesSelector))])
  .pipe(map(([logMessages]) => { return { logMessages: logMessages } }));

export interface IHostHeaderComponent {
  hostHeaderComponentContext$: Observable<{  logMessagesLength: Number }>;
  deleteLogMessages(): void;
}
export interface IHostHomeComponent {
  addLogMessage(logMessage: LogMessage): void;
}
export interface IHostDummyAuthenticationComponent {
  addLogMessage(logMessage: LogMessage): void;
}
export interface IMfe1LogMessagesComponent {
  mfe1LogMessagesComponentContext$: Observable<{ logMessages: LogMessage[] }>;
  deleteLogMessage(logMessage: LogMessage): void;
}
export interface IMfe1LogMessageTesterComponent {
  addLogMessage(logMessage: LogMessage): void;
}

@Injectable({ providedIn: 'root'})
class LogMessagesInteraction implements IHostHeaderComponent, IHostHomeComponent, IHostDummyAuthenticationComponent, IMfe1LogMessagesComponent, IMfe1LogMessageTesterComponent {
  constructor(private readonly store: Store<ILogMessagesState>) {}

  hostHeaderComponentContext$ = hostHeaderComponentContext(this.store);
  mfe1LogMessagesComponentContext$ = mfe1LogMessagesComponentContext(this.store);

  addLogMessage(logMessage: LogMessage): void {
    this.store.dispatch(addLogMessage({ logMessage }));
  }

  deleteLogMessage(logMessage: LogMessage): void {
    console.log('[log-message-store] delete log-message.')
    this.store.dispatch(deleteLogMessage({ logMessage }));
  }

  deleteLogMessages() {
    console.log('[log-message-store] delete log-messages.')
    this.store.dispatch(deleteLogMessages());
  }
}

export const IHOST_HEADER_COMPONENT_INJECTION_TOKEN = new InjectionToken<IHostHeaderComponent>('IHOST_HEADER_COMPONENT');
export const IHOST_HOME_COMPONENT_INJECTION_TOKEN = new InjectionToken<IHostHomeComponent>('IHOST_HOME_COMPONENT');
export const IHOST_DUMMY_AUTHENTICATION_COMPONENT_INJECTION_TOKEN = new InjectionToken<IHostDummyAuthenticationComponent>('IHOST_DUMMY_AUTHENTICATION_COMPONENT');
export const IMFE1_LOGMESSAGES_COMPONENT_INJECTION_TOKEN = new InjectionToken<IMfe1LogMessagesComponent>('IMFE1_LOGMESSAGES_COMPONENT');
export const IMFE1_LOGMESSAGE_TESTER_COMPONENT_INJECTION_TOKEN = new InjectionToken<IMfe1LogMessageTesterComponent>('IMFE1_LOGMESSAGE_TESTER_COMPONENT');

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
