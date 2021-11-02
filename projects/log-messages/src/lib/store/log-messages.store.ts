import {Injectable} from "@angular/core";
import {createFeatureSelector, createSelector, select, Store} from "@ngrx/store";
import {combineLatest} from "rxjs";
import {map} from "rxjs/operators";
import {addLogMessage, deleteLogMessage, deleteLogMessages} from "./log-messages.actions";
import {
  LogMessage, ILogMessagesState,
  IHostHomeComponent, IHostDummyAuthenticationComponent, IHostHeaderComponent, IMfe1LogMessagesComponent, IMfe1LogMessageTesterComponent
} from "@lib/log-messages";

export const logMessagesStateFeatureName = 'logMessagesState';
const logMessagesFeatureSelector = createFeatureSelector<ILogMessagesState>(logMessagesStateFeatureName)
const logMessages = createSelector(logMessagesFeatureSelector, state => state.logMessages)
const logMessagesContext = (store: Store<ILogMessagesState>) => combineLatest([store.pipe(select(logMessages))])
  .pipe(map(([logMessages]) => { return { logMessages: logMessages } }));

@Injectable({ providedIn: 'root'})
export class LogMessagesStore implements IHostHeaderComponent, IHostHomeComponent, IHostDummyAuthenticationComponent, IMfe1LogMessagesComponent, IMfe1LogMessageTesterComponent {
  constructor(private readonly store: Store<ILogMessagesState>) {}

  context$ = logMessagesContext(this.store);

  addLogMessage(logMessage: LogMessage): void {
    this.store.dispatch(addLogMessage({ logMessage }));
  }

  deleteLogMessage(logMessage: LogMessage): void {
    console.log('[mfe3 log-message-store] delete log-message.')
    this.store.dispatch(deleteLogMessage({ logMessage }));
  }

  deleteLogMessages() {
    console.log('[mfe3 log-message-store] delete log-messages.')
    this.store.dispatch(deleteLogMessages());
  }
}
