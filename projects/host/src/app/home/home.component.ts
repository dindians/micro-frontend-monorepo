import {Component, Inject} from '@angular/core';
import {IHOST_HOME_COMPONENT_INJECTION_TOKEN, IHostHomeComponent, LogLevel, LogMessage} from "@lib/log-messages";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(@Inject(IHOST_HOME_COMPONENT_INJECTION_TOKEN) private readonly logMessages: IHostHomeComponent) {}

  trace(): void { this.addLogMessage('trace from micro frontend host', LogLevel.TRACE); }
  debug(): void { this.addLogMessage('debug from micro frontend host', LogLevel.DEBUG); }
  info(): void { this.addLogMessage('info from micro frontend host', LogLevel.INFO); }
  warning(): void { this.addLogMessage('warning from micro frontend host', LogLevel.WARNING); }
  error(): void { this.addLogMessage('error from micro frontend host', LogLevel.ERROR); }

  private addLogMessage(message: string, logLevel: LogLevel): void {
    this.logMessages.addLogMessage(new LogMessage('[host home-component] ' + message, logLevel, JSON.parse(JSON.stringify(new Date())), 'HomeComponent'));
  }
}
