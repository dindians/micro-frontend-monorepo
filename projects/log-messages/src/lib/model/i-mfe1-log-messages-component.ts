import {Observable} from "rxjs";
import {LogMessage} from "@lib/log-messages";

export interface IMfe1LogMessagesComponent {
  mfe1LogMessagesComponentContext$: Observable<{ logMessages: LogMessage[] }>;
  deleteLogMessage(logMessage: LogMessage): void;
}
