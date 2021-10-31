import {Component, Inject} from '@angular/core';
import {
  IMFE1_LOGMESSAGE_TESTER_COMPONENT_INJECTION_TOKEN,
  LogLevel, LogMessage, IMfe1LogMessageTesterComponent
} from "@lib/log-messages";

@Component({
  selector: 'app-log-message-tester',
  templateUrl: './log-message-tester.component.html',
  styleUrls: ['./log-message-tester.component.scss']
})
export class LogMessageTesterComponent {
  constructor(@Inject(IMFE1_LOGMESSAGE_TESTER_COMPONENT_INJECTION_TOKEN) private readonly logMessages: IMfe1LogMessageTesterComponent) {}

  trace(): void { this.addLogMessage('trace from micro frontend one', LogLevel.TRACE); }
  debug(): void { this.addLogMessage('debug from micro frontend one', LogLevel.DEBUG); }
  info(): void { this.addLogMessage('info from micro frontend one', LogLevel.INFO); }
  warning(): void { this.addLogMessage('warning from micro frontend one', LogLevel.WARNING); }
  error(): void { this.addLogMessage('error from micro frontend one', LogLevel.ERROR); }

  private addLogMessage(message: string, logLevel: LogLevel): void {
    this.logMessages.addLogMessage(new LogMessage('[micro frontend one log-message-tester-component] ' + message, logLevel, JSON.parse(JSON.stringify(new Date())), 'LogMessageTesterComponent'));
  }
}
