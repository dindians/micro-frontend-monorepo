import {createReducer, on} from "@ngrx/store";
import {environment} from "../../../../host/src/environments/environment";
import {addLogMessage, deleteLogMessage, deleteLogMessages} from "./log-messages.actions";
import {ILogMessagesState, LogMessage} from "@lib/log-messages";

class LogMessagesState implements ILogMessagesState {
  private constructor(readonly logMessages: LogMessage[]) {}

  static create(logMessages: LogMessage[]): ILogMessagesState { return new LogMessagesState(logMessages); }
  static empty(): ILogMessagesState {return LogMessagesState.create([]); }
}

class LogMessagesStates {
  static initialState(): ILogMessagesState { return LogMessagesState.empty(); }

  static logMessageAddedState(state: ILogMessagesState, logMessage: LogMessage): ILogMessagesState {
    return LogMessagesState.create(LogMessagesStates._addLogMessage(state.logMessages, logMessage));
  }

  static logMessageDeletedState(state: ILogMessagesState, logMessage: LogMessage): ILogMessagesState {
    return LogMessagesState.create(LogMessagesStates._deleteLogMessage(state.logMessages, logMessage));
  }

  static logMessagesDeletedState(): ILogMessagesState {
    return LogMessagesState.empty();
  }

  private static _addLogMessage(logMessages: LogMessage[], logMessageToAdd: LogMessage): LogMessage[] {
    return logMessages.concat(logMessageToAdd);
  }
  private static _deleteLogMessage(logMessages: LogMessage[], logMessageToDelete: LogMessage): LogMessage[] {
    return logMessages.filter(logMessage => !LogMessage.areEqual(logMessage, logMessageToDelete));
  }
}

export const logMessagesStateReducer = createReducer<ILogMessagesState>(
  LogMessagesStates.initialState(),
  on(addLogMessage, (state, action) => { consoleLog('addLogMessage action'); return LogMessagesStates.logMessageAddedState(state, action.logMessage); }),
  on(deleteLogMessage, (state, action) => { consoleLog('deleteLogMessage action'); return LogMessagesStates.logMessageDeletedState(state, action.logMessage); }),
  on(deleteLogMessages, _ => { consoleLog('deleteLogMessages action'); return LogMessagesStates.logMessagesDeletedState(); })
);

function consoleLog(message?: any) {
  if(environment.production) return;
  console.log('[logmessages state-reducer] ' + message);
}
