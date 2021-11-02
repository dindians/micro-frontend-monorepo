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
const logMessagesSelector = createSelector(logMessagesFeatureSelector, state => state.logMessages)
const logMessagesLengthSelector = createSelector(logMessagesSelector, logMessages => logMessages.length);

const hostHeaderComponentContext = (store: Store<ILogMessagesState>) => store.pipe(select(logMessagesLengthSelector)).pipe(map((length) => { return { logMessagesLength: length }}));
const mfe1LogMessagesComponentContext = (store: Store<ILogMessagesState>) => combineLatest([store.pipe(select(logMessagesSelector))])
  .pipe(map(([logMessages]) => { return { logMessages: logMessages } }));

@Injectable({ providedIn: 'root'})
export class LogMessagesStore implements IHostHeaderComponent, IHostHomeComponent, IHostDummyAuthenticationComponent, IMfe1LogMessagesComponent, IMfe1LogMessageTesterComponent {
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
