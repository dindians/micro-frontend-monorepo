import {LogMessage, LogMessagesState, ILogMessagesState} from "@lib/log-messages";

export class LogMessagesStates {
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
