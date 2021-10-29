import {Component, Inject} from '@angular/core';
import {
  ILOGMESSAGES_CONTEXT_INJECTION_TOKEN, ILOGMESSAGE_DELETER_INJECTION_TOKEN,
  ILogMessagesContext, ILogMessageDeleter, LogMessage} from "@lib/log-messages";

@Component({
  selector: 'app-log-messages',
  templateUrl: './log-messages.component.html',
  styleUrls: ['./log-messages.component.scss']
})
export class LogMessagesComponent {
  constructor(
    @Inject(ILOGMESSAGES_CONTEXT_INJECTION_TOKEN) private readonly logMessagesContext: ILogMessagesContext,
    @Inject(ILOGMESSAGE_DELETER_INJECTION_TOKEN) private readonly logMessageDeleter: ILogMessageDeleter
  ) {}
  context$ = this.logMessagesContext.context$;

  deleteLogMessage(logMessage: LogMessage): void {
    this.logMessageDeleter.deleteLogMessage(logMessage);
  }
}
