import {createFeatureSelector, createSelector, select, Store} from "@ngrx/store";
import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {combineLatest} from "rxjs";
import {ILogMessagesInteraction} from "./i-log-messages-interaction";
import {addLogMessage, deleteLogMessage, deleteLogMessages} from "./log-messages.state.reducer";
import {logMessagesStateName} from "../model/i-log-messages-state";
import {ILogMessagesState, LogMessage} from "@lib/log-messages";

const logMessagesFeatureSelector = createFeatureSelector<ILogMessagesState>(logMessagesStateName())
const logMessagesSelector = createSelector(logMessagesFeatureSelector, state => state.logMessages)
const logMessagesLengthSelector = createSelector(logMessagesFeatureSelector, state => state.logMessages.length);

const hostHeaderComponentContext = (store: Store<ILogMessagesState>) => store.pipe(select(logMessagesLengthSelector)).pipe(map((length) => { return { logMessagesLength: length }; }));
const mfe1LogMessagesComponentContext = (store: Store<ILogMessagesState>) => combineLatest([store.pipe(select(logMessagesSelector))])
  .pipe(map(([logMessages]) => { return { logMessages: logMessages }; }));

/*
todo do not dispatch log-message actions directly from this class, but use a log-message service for that.
here are the log-message feature use cases/user stories
* add log-message scenario/workflow:

1. 'user or system' dispatches add-[level]-log-message action; level = debug..error; action parameters: message text and message source
2. log-message service listens to the add-[level]-log-message action and adds the log-message
3. log-message successfully added -> log-message service dispatches log-message-added action
....
 */
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
