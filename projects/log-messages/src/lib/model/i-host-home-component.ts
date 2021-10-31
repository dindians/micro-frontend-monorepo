import {LogMessage} from "./log-message";

export interface IHostHomeComponent {
  addLogMessage(logMessage: LogMessage): void;
}
