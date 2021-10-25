import {LogMessage, ILogMessagesState} from "@lib/log-messages";

export class LogMessagesState implements ILogMessagesState {
  private constructor(readonly logMessages: LogMessage[]) {}

  static create(logMessages: LogMessage[]): ILogMessagesState { return new LogMessagesState(logMessages); }
  static empty(): ILogMessagesState {return LogMessagesState.create([]); }
}
