import {LogMessage} from "./log-message";

export interface ILogMessageAdder {
  addLogMessage(logMessage: LogMessage): void;
}
