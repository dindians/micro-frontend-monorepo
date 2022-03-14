import {InjectionToken} from "@angular/core";
import {Observable} from "rxjs";
import {LogMessage} from "./log-message";

/*
 follow the Interface Segregation Principle in Clean Architecture, which states that "Clients should not be forced to depend upon interfaces that they do not use."
 [ a client should not be exposed to methods it doesn’t need. Declaring methods in an interface that the client doesn’t need pollutes the interface and leads to a “bulky” or “fat” interface. ]
 */

export interface ILogMessageServiceForHostHomeComponent {
  debug(message: string, source: string): void;
  trace(message: string, source: string): void;
  info(message: string, source: string): void;
  warning(message: string, source: string): void;
  error(message: string, source: string): void;
}

export interface ILogMessageServiceForHostHeaderComponent {
  hostHeaderComponentContext$: Observable<{  logMessagesLength: Number }>;
  deleteAll(): void;
}

export interface ILogMessageServiceForHostDummyAuthenticationComponent {
  info(message: string, source: string): void;
}

export interface ILogMessageServiceForMfe1LogMessageTesterComponent {
  debug(message: string, source: string): void;
  trace(message: string, source: string): void;
  info(message: string, source: string): void;
  warning(message: string, source: string): void;
  error(message: string, source: string): void;
}

export interface ILogMessageServiceForMfe1LogMessagesComponent {
  mfe1LogMessagesComponentContext$: Observable<{ logMessages: LogMessage[] }>;
  deleteLogMessage(logMessage: LogMessage): void;
}

export interface ILogMessageService extends ILogMessageServiceForHostHomeComponent, ILogMessageServiceForHostHeaderComponent, ILogMessageServiceForHostDummyAuthenticationComponent, ILogMessageServiceForMfe1LogMessageTesterComponent, ILogMessageServiceForMfe1LogMessagesComponent {}

export const ILOG_MESSAGE_SERVICE_FOR_HOST_HOME_COMPONENT_INJECTION_TOKEN = new InjectionToken<ILogMessageServiceForHostHomeComponent>('ILOG_MESSAGE_SERVICE_FOR_HOST_HOME_COMPONENT');
export const ILOG_MESSAGE_SERVICE_FOR_HOST_HEADER_COMPONENT_INJECTION_TOKEN = new InjectionToken<ILogMessageServiceForHostHeaderComponent>('ILOG_MESSAGE_SERVICE_FOR_HOST_HEADER_COMPONENT');
export const ILOG_MESSAGE_SERVICE_FOR_HOST_DUMMY_AUTHENTICATION_COMPONENT_INJECTION_TOKEN = new InjectionToken<ILogMessageServiceForHostDummyAuthenticationComponent>('ILOG_MESSAGE_SERVICE_FOR_HOST_DUMMY_AUTHENTICATION_COMPONENT');
export const ILOG_MESSAGE_SERVICE_FOR_MFE1_LOGMESSAGE_TESTER_COMPONENT_INJECTION_TOKEN = new InjectionToken<ILogMessageServiceForMfe1LogMessageTesterComponent>('ILOG_MESSAGE_SERVICE_FOR_MFE1_LOGMESSAGE_TESTER_COMPONENT');
export const ILOG_MESSAGE_SERVICE_FOR_MFE1_LOGMESSAGES_COMPONENT_INJECTION_TOKEN = new InjectionToken<ILogMessageServiceForMfe1LogMessagesComponent>('ILOG_MESSAGE_SERVICE_FOR_MFE1_LOGMESSAGES_COMPONENT');
