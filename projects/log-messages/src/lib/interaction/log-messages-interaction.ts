import {createFeatureSelector, createSelector, select, Store} from "@ngrx/store";
import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {combineLatest} from "rxjs";
import {ILogMessagesInteraction} from "./i-log-messages-interaction";
import {addLogMessage, deleteLogMessage, deleteLogMessages} from "./log-messages.state.reducer";
import {ILogMessagesState, LogMessage} from "@lib/log-messages";

export const logMessagesStateFeatureName = 'logMessagesState';

const logMessagesFeatureSelector = createFeatureSelector<ILogMessagesState>(logMessagesStateFeatureName)
const logMessagesSelector = createSelector(logMessagesFeatureSelector, state => state.logMessages)
const logMessagesLengthSelector = createSelector(logMessagesFeatureSelector, state => state.logMessages.length);

const hostHeaderComponentContext = (store: Store<ILogMessagesState>) => store.pipe(select(logMessagesLengthSelector)).pipe(map((length) => { return { logMessagesLength: length }}));
const mfe1LogMessagesComponentContext = (store: Store<ILogMessagesState>) => combineLatest([store.pipe(select(logMessagesSelector))])
  .pipe(map(([logMessages]) => { return { logMessages: logMessages } }));

@Injectable({ providedIn: 'root'})
export class LogMessagesInteraction implements ILogMessagesInteraction {
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
