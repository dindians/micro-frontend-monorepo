import {Component, Inject, Injectable} from '@angular/core';
import {ILOGMESSAGE_ADDER_INJECTION_TOKEN, ILogMessageAdder, LogLevel, LogMessage} from "@lib/log-messages";

@Injectable({ providedIn: 'root'})
class LogMessageAdder implements ILogMessageAdder {
  addLogMessage(logMessage: LogMessage): void {
    console.log('[mfe1] add log message: ' + logMessage)
  }
}
@Component({
  selector: 'app-log-message-tester',
  templateUrl: './log-message-tester.component.html',
  styleUrls: ['./log-message-tester.component.scss'],
  providers: [ {provide: ILOGMESSAGE_ADDER_INJECTION_TOKEN, useExisting: LogMessageAdder} ]
})
export class LogMessageTesterComponent {
  constructor(@Inject(ILOGMESSAGE_ADDER_INJECTION_TOKEN) private readonly logMessageAdder: ILogMessageAdder) {}

  trace(): void { this.addLogMessage('trace from micro frontend host', LogLevel.TRACE); }
  debug(): void { this.addLogMessage('debug from micro frontend host', LogLevel.DEBUG); }
  info(): void { this.addLogMessage('info from micro frontend host', LogLevel.INFO); }
  warning(): void { this.addLogMessage('warning from micro frontend host', LogLevel.WARNING); }
  error(): void { this.addLogMessage('error from micro frontend host', LogLevel.ERROR); }

  private addLogMessage(message: string, logLevel: LogLevel): void {
    this.logMessageAdder.addLogMessage(new LogMessage('[host home-component] ' + message, logLevel, JSON.parse(JSON.stringify(new Date())), 'HomeComponent'));
  }
}
