import {Component, Inject, InjectionToken} from '@angular/core';
import {ILogMessageDeleter, ILogMessagesContext, LogMessage, LogMessagesStore} from "@lib/log-messages";

const ILOGMESSAGES_CONTEXT_INJECTION_TOKEN = new InjectionToken<ILogMessagesContext>('ILOGMESSAGES_CONTEXT');
const ILOGMESSAGE_DELETER_INJECTION_TOKEN = new InjectionToken<ILogMessageDeleter>('ILOGMESSAGE_DELETER');

@Component({
  selector: 'app-log-messages',
  templateUrl: './log-messages.component.html',
  styleUrls: ['./log-messages.component.scss'],
  providers: [
    {provide: ILOGMESSAGES_CONTEXT_INJECTION_TOKEN, useExisting: LogMessagesStore},
    {provide: ILOGMESSAGE_DELETER_INJECTION_TOKEN, useExisting: LogMessagesStore}
  ]
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
