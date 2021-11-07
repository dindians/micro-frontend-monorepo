import {Component, Inject} from '@angular/core';
import {ILOG_MESSAGE_SERVICE_FOR_MFE1_LOGMESSAGES_COMPONENT_INJECTION_TOKEN, ILogMessageServiceForMfe1LogMessagesComponent, LogMessage} from "@lib/log-messages";

@Component({
  selector: 'app-log-messages',
  templateUrl: './log-messages.component.html',
  styleUrls: ['./log-messages.component.scss']
})
export class LogMessagesComponent {
  constructor(@Inject(ILOG_MESSAGE_SERVICE_FOR_MFE1_LOGMESSAGES_COMPONENT_INJECTION_TOKEN) private readonly logMessageService: ILogMessageServiceForMfe1LogMessagesComponent) {}
  context$ = this.logMessageService.mfe1LogMessagesComponentContext$;

  deleteLogMessage(logMessage: LogMessage): void {
    this.logMessageService.deleteLogMessage(logMessage);
  }
}
