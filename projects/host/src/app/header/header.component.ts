import {Component, Inject} from '@angular/core';
import {IHOST_HEADER_COMPONENT_INJECTION_TOKEN, IHostHeaderComponent} from "@lib/log-messages";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  context$ = this.logMessages.context$;
  constructor(@Inject(IHOST_HEADER_COMPONENT_INJECTION_TOKEN) private readonly logMessages: IHostHeaderComponent) {}
  deleteLogMessages(): void { this.logMessages.deleteLogMessages(); }
}
