import {LogMessage} from "@lib/log-messages";

export interface ILogMessageDeleter {
  deleteLogMessage(logMessage: LogMessage): void;
}
