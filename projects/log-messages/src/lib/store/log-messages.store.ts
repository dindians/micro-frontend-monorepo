import {Injectable, InjectionToken} from "@angular/core";
import {createFeatureSelector, createSelector, select, Store} from "@ngrx/store";
import {combineLatest} from "rxjs";
import {map} from "rxjs/operators";
import {
  addLogMessage, deleteLogMessage, LogMessage, ILogMessagesState,
  IHostHomeComponent, IHostHeaderComponent, IMfe1LogMessagesComponent, IMfe1LogMessageTesterComponent
} from "@lib/log-messages";

export const IHOST_HEADER_COMPONENT_INJECTION_TOKEN = new InjectionToken<IHostHeaderComponent>('IHOST_HEADER_COMPONENT');
export const IHOST_HOME_COMPONENT_INJECTION_TOKEN = new InjectionToken<IHostHomeComponent>('IHOST_HOME_COMPONENT');
export const IMFE1_LOGMESSAGES_COMPONENT_INJECTION_TOKEN = new InjectionToken<IMfe1LogMessagesComponent>('IMFE1_LOGMESSAGES_COMPONENT');
export const IMFE1_LOGMESSAGE_TESTER_COMPONENT_INJECTION_TOKEN = new InjectionToken<IMfe1LogMessageTesterComponent>('IMFE1_LOGMESSAGE_TESTER_COMPONENT');

export const logMessagesStateFeatureName = 'logMessagesState';
const logMessagesFeatureSelector = createFeatureSelector<ILogMessagesState>(logMessagesStateFeatureName)
const logMessages = createSelector(logMessagesFeatureSelector, state => state.logMessages)
const logMessagesContext = (store: Store<ILogMessagesState>) => combineLatest([store.pipe(select(logMessages))])
  .pipe(map(([logMessages]) => { return { logMessages: logMessages } }));

@Injectable({ providedIn: 'root'})
export class LogMessagesStore implements IHostHeaderComponent, IHostHomeComponent, IMfe1LogMessagesComponent, IMfe1LogMessageTesterComponent {
  constructor(private readonly store: Store<ILogMessagesState>) {}

  context$ = logMessagesContext(this.store);

  addLogMessage(logMessage: LogMessage): void {
    this.store.dispatch(addLogMessage({ logMessage }));
  }

  deleteLogMessage(logMessage: LogMessage): void {
    console.log('[mfe3 log-message-store-impl] delete log-message.')
    this.store.dispatch(deleteLogMessage({ logMessage }));
  }
}
