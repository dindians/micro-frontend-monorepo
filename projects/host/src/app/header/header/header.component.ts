import {Component, Inject} from '@angular/core';
import {IHOST_HEADER_COMPONENT_INJECTION_TOKEN, IHostHeaderComponent, LogMessagesStore} from "@lib/log-messages";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [{provide: IHOST_HEADER_COMPONENT_INJECTION_TOKEN, useExisting: LogMessagesStore}]
})
export class HeaderComponent {
  context$ = this.logMessages.context$;
  constructor(@Inject(IHOST_HEADER_COMPONENT_INJECTION_TOKEN) private readonly logMessages: IHostHeaderComponent) {}
}
