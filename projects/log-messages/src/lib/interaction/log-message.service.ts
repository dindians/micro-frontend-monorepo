import {Injectable} from '@angular/core';
import {createFeatureSelector, createSelector, select, Store} from "@ngrx/store";
import {map} from "rxjs/operators";
import {combineLatest} from "rxjs";
import {ILogMessageService} from "../model/i-log-message-service";
import {addLogMessage, deleteLogMessage, deleteLogMessages} from "./log-messages.state.reducer";
import {logMessagesStateName} from "../model/i-log-messages-state";
import {ILogMessagesState, LogLevel, LogMessage} from "@lib/log-messages";

const logMessagesFeatureSelector = createFeatureSelector<ILogMessagesState>(logMessagesStateName())
const logMessagesSelector = createSelector(logMessagesFeatureSelector, state => state.logMessages)
const logMessagesLengthSelector = createSelector(logMessagesFeatureSelector, state => state.logMessages.length);

const hostHeaderComponentContext = (store: Store<ILogMessagesState>) => store.pipe(select(logMessagesLengthSelector)).pipe(map((length) => { return { logMessagesLength: length }; }));
const mfe1LogMessagesComponentContext = (store: Store<ILogMessagesState>) => combineLatest([store.pipe(select(logMessagesSelector))])
  .pipe(map(([logMessages]) => { return { logMessages: logMessages }; }));

@Injectable({ providedIn: 'root' })
export class LogMessageService implements ILogMessageService {
  constructor(private readonly store: Store<ILogMessagesState>) {}

  debug(message: string, source: string): void {
    this.add(message, source, LogLevel.DEBUG);
  }

  trace(message: string, source: string): void {
    this.add(message, source, LogLevel.TRACE);
  }

  info(message: string, source: string): void {
    this.add(message, source, LogLevel.INFO);
  }

  warning(message: string, source: string): void {
    this.add(message, source, LogLevel.WARNING);
  }

  error(message: string, source: string): void {
    this.add(message, source, LogLevel.ERROR);
  }

  deleteLogMessage(logMessage: LogMessage): void {
    console.log('[log-message-store] delete log-message.')
    this.store.dispatch(deleteLogMessage({ logMessage }));
  }

  deleteAll(): void {
    console.log('[log-message-service] delete all log-messages.')
    this.store.dispatch(deleteLogMessages());
  }

  hostHeaderComponentContext$ = hostHeaderComponentContext(this.store);
  mfe1LogMessagesComponentContext$ = mfe1LogMessagesComponentContext(this.store);

  private add(message: string, source: string, logLevel: LogLevel): void {
    this.store.dispatch(addLogMessage({ logMessage: new LogMessage(message, logLevel, JSON.parse(JSON.stringify(new Date())), source) }));
  }
}
