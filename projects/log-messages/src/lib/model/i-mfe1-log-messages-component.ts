import {Observable} from "rxjs";
import {LogMessage} from "@lib/log-messages";

export interface IMfe1LogMessagesComponent {
  context$: Observable<{ logMessages: LogMessage[] }>;
  deleteLogMessage(logMessage: LogMessage): void;
}
