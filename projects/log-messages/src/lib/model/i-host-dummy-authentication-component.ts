import {LogMessage} from "@lib/log-messages";

export interface IHostDummyAuthenticationComponent {
  addLogMessage(logMessage: LogMessage): void;
}
