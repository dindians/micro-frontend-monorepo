import {InjectionToken} from "@angular/core";
import {Observable} from "rxjs";
import {LogMessage} from "@lib/log-messages";

/*
 follow the Interface Segregation Principle in Clean Architecture, which states that "Clients should not be forced to depend upon interfaces that they do not use."
 [ a client should not be exposed to methods it doesn’t need. Declaring methods in an interface that the client doesn’t need pollutes the interface and leads to a “bulky” or “fat” interface. ]
 */
export interface IHostHeaderComponent {
  hostHeaderComponentContext$: Observable<{  logMessagesLength: Number }>;
  deleteLogMessages(): void;
}
export interface IHostHomeComponent {
  addLogMessage(logMessage: LogMessage): void;
}
export interface IHostDummyAuthenticationComponent {
  addLogMessage(logMessage: LogMessage): void;
}
export interface IMfe1LogMessagesComponent {
  mfe1LogMessagesComponentContext$: Observable<{ logMessages: LogMessage[] }>;
  deleteLogMessage(logMessage: LogMessage): void;
}
export interface IMfe1LogMessageTesterComponent {
  addLogMessage(logMessage: LogMessage): void;
}

export interface ILogMessagesInteraction extends IHostHeaderComponent, IHostHomeComponent, IHostDummyAuthenticationComponent, IMfe1LogMessagesComponent, IMfe1LogMessageTesterComponent {}

export const IHOST_HEADER_COMPONENT_INJECTION_TOKEN = new InjectionToken<IHostHeaderComponent>('IHOST_HEADER_COMPONENT');
export const IHOST_HOME_COMPONENT_INJECTION_TOKEN = new InjectionToken<IHostHomeComponent>('IHOST_HOME_COMPONENT');
export const IHOST_DUMMY_AUTHENTICATION_COMPONENT_INJECTION_TOKEN = new InjectionToken<IHostDummyAuthenticationComponent>('IHOST_DUMMY_AUTHENTICATION_COMPONENT');
export const IMFE1_LOGMESSAGES_COMPONENT_INJECTION_TOKEN = new InjectionToken<IMfe1LogMessagesComponent>('IMFE1_LOGMESSAGES_COMPONENT');
export const IMFE1_LOGMESSAGE_TESTER_COMPONENT_INJECTION_TOKEN = new InjectionToken<IMfe1LogMessageTesterComponent>('IMFE1_LOGMESSAGE_TESTER_COMPONENT');
