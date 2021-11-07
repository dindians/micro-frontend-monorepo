import {Component, Inject} from '@angular/core';
import {ILOG_MESSAGE_SERVICE_FOR_HOST_HEADER_COMPONENT_INJECTION_TOKEN, ILogMessageServiceForHostHeaderComponent} from "@lib/log-messages";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  context$ = this.logMessageService.hostHeaderComponentContext$;
  constructor(@Inject(ILOG_MESSAGE_SERVICE_FOR_HOST_HEADER_COMPONENT_INJECTION_TOKEN) private readonly logMessageService: ILogMessageServiceForHostHeaderComponent) {}
  deleteLogMessages(): void { this.logMessageService.deleteAll(); }
}
