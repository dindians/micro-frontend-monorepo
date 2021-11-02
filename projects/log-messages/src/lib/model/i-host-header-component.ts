import {Observable} from "rxjs";

export interface IHostHeaderComponent {
  hostHeaderComponentContext$: Observable<{  logMessagesLength: Number }>;
  deleteLogMessages(): void;
}
