import {Observable} from "rxjs";
import {LogMessage} from "@lib/log-messages";

export interface IHostHeaderComponent {
  context$: Observable<{ logMessages: LogMessage[] }>;
  deleteLogMessages(): void;
}
