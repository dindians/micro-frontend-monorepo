import {Observable} from "rxjs";
import {LogMessage} from "@lib/log-messages";

export interface ILogMessagesContext {
  context$: Observable<{ logMessages: LogMessage[] }>;
}
