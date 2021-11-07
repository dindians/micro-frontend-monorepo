import {Component, Inject} from '@angular/core';
import {ILOG_MESSAGE_SERVICE_FOR_MFE1_LOGMESSAGE_TESTER_COMPONENT_INJECTION_TOKEN, ILogMessageServiceForMfe1LogMessageTesterComponent} from "@lib/log-messages";

@Component({
  selector: 'app-log-message-tester',
  templateUrl: './log-message-tester.component.html',
  styleUrls: ['./log-message-tester.component.scss']
})
export class LogMessageTesterComponent {
  constructor(@Inject(ILOG_MESSAGE_SERVICE_FOR_MFE1_LOGMESSAGE_TESTER_COMPONENT_INJECTION_TOKEN) private readonly logMessageService: ILogMessageServiceForMfe1LogMessageTesterComponent) {}

  private messagePrefix = '[micro frontend one log-message-tester-component] ';
  private messageSource = 'LogMessageTesterComponent';
  trace(): void { this.logMessageService.trace(this.messagePrefix + 'info from micro frontend one',  this.messageSource); }
  debug(): void { this.logMessageService.debug(this.messagePrefix + 'info from micro frontend one',  this.messageSource); }
  info(): void { this.logMessageService.info(this.messagePrefix + 'info from micro frontend one',  this.messageSource); }
  warning(): void { this.logMessageService.warning(this.messagePrefix + 'info from micro frontend one',  this.messageSource); }
  error(): void { this.logMessageService.error(this.messagePrefix + 'info from micro frontend one',  this.messageSource); }
}
