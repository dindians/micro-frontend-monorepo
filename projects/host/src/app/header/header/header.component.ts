import {Component, Inject} from '@angular/core';
import {ILOGMESSAGES_CONTEXT_INJECTION_TOKEN, ILogMessagesContext, LogMessagesStore} from "@lib/log-messages";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [{provide: ILOGMESSAGES_CONTEXT_INJECTION_TOKEN, useExisting: LogMessagesStore}]
})
export class HeaderComponent {
  context$ = this.logMessagesContext.context$;
  constructor(@Inject(ILOGMESSAGES_CONTEXT_INJECTION_TOKEN) private readonly logMessagesContext: ILogMessagesContext) {}
}
