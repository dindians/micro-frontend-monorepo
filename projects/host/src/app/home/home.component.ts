import {Component, Inject} from '@angular/core';
import {ILOG_MESSAGE_SERVICE_FOR_HOST_HOME_COMPONENT_INJECTION_TOKEN, ILogMessageServiceForHostHomeComponent} from "@lib/log-messages";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(@Inject(ILOG_MESSAGE_SERVICE_FOR_HOST_HOME_COMPONENT_INJECTION_TOKEN) private readonly logMessageService: ILogMessageServiceForHostHomeComponent) {}

  private messagePrefix = '[host home-component] ';
  private messageSource = 'HomeComponent';
  trace(): void { this.logMessageService.trace(this.messagePrefix + 'trace from micro frontend host',  this.messageSource); }
  debug(): void { this.logMessageService.debug(this.messagePrefix + 'debug from micro frontend host',  this.messageSource); }
  info(): void { this.logMessageService.info(this.messagePrefix + 'info from micro frontend host',  this.messageSource); }
  warning(): void { this.logMessageService.warning(this.messagePrefix + 'warning from micro frontend host',  this.messageSource); }
  error(): void { this.logMessageService.error(this.messagePrefix + 'error from micro frontend host',  this.messageSource); }
}
