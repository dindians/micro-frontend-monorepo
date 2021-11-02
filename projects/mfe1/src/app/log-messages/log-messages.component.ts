import {Component, Inject} from '@angular/core';
import {IMFE1_LOGMESSAGES_COMPONENT_INJECTION_TOKEN, IMfe1LogMessagesComponent, LogMessage} from "@lib/log-messages";

@Component({
  selector: 'app-log-messages',
  templateUrl: './log-messages.component.html',
  styleUrls: ['./log-messages.component.scss']
})
export class LogMessagesComponent {
  constructor(@Inject(IMFE1_LOGMESSAGES_COMPONENT_INJECTION_TOKEN) private readonly logMessages: IMfe1LogMessagesComponent) {}
  context$ = this.logMessages.mfe1LogMessagesComponentContext$;

  deleteLogMessage(logMessage: LogMessage): void {
    this.logMessages.deleteLogMessage(logMessage);
  }
}
