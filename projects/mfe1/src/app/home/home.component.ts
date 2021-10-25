import {Component, Inject, Injectable} from '@angular/core';
import {LogLevel, LogMessage, ILogMessageAdder, ILOGMESSAGE_ADDER_INJECTION_TOKEN} from "@lib/log-messages";

@Injectable({ providedIn: 'root'})
class LogMessageAdder implements ILogMessageAdder {
  addLogMessage(logMessage: LogMessage): void {
    console.log('[mfe1] add log message: ' + logMessage)
  }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ {provide: ILOGMESSAGE_ADDER_INJECTION_TOKEN, useExisting: LogMessageAdder} ]
})
export class HomeComponent {
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

