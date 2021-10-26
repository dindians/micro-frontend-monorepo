import {Injectable, InjectionToken} from "@angular/core";
import {createFeatureSelector, createSelector, select, Store} from "@ngrx/store";
import {combineLatest} from "rxjs";
import {map} from "rxjs/operators";
import {
  addLogMessage,
  deleteLogMessage,
  LogMessage,
  ILogMessageAdder,
  ILogMessageDeleter,
  ILogMessagesContext,
  ILogMessagesState
} from "@lib/log-messages";

export const ILOGMESSAGE_ADDER_INJECTION_TOKEN = new InjectionToken<ILogMessageAdder>('ILOGMESSAGE_ADDER');
export const ILOGMESSAGES_CONTEXT_INJECTION_TOKEN = new InjectionToken<ILogMessagesContext>('ILOGMESSAGES_CONTEXT');

const logMessagesStateFeatureName = 'logMessagesState';
const logMessagesFeatureSelector = createFeatureSelector<ILogMessagesState>(logMessagesStateFeatureName)
const logMessages = createSelector(logMessagesFeatureSelector, state => state.logMessages)
const logMessagesContext = (store: Store<ILogMessagesState>) => combineLatest([store.pipe(select(logMessages))])
  .pipe(map(([logMessages]) => { return { logMessages: logMessages } }));

@Injectable({ providedIn: 'root'})
export class LogMessagesStore implements ILogMessagesContext, ILogMessageAdder, ILogMessageDeleter {
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
