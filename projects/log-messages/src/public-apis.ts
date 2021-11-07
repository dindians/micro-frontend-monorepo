/*
 * Public API Surface of log-message-model
 */

export {LogLevel} from './lib/model/log-level';
export {LogMessage} from './lib/model/log-message';
export {ILogMessagesState} from './lib/model/i-log-messages-state';
export {
  ILogMessageServiceForHostHomeComponent,
  ILogMessageServiceForHostHeaderComponent,
  ILogMessageServiceForHostDummyAuthenticationComponent,
  ILogMessageServiceForMfe1LogMessagesComponent,
  ILogMessageServiceForMfe1LogMessageTesterComponent,
  ILOG_MESSAGE_SERVICE_FOR_HOST_HOME_COMPONENT_INJECTION_TOKEN,
  ILOG_MESSAGE_SERVICE_FOR_HOST_HEADER_COMPONENT_INJECTION_TOKEN,
  ILOG_MESSAGE_SERVICE_FOR_HOST_DUMMY_AUTHENTICATION_COMPONENT_INJECTION_TOKEN,
  ILOG_MESSAGE_SERVICE_FOR_MFE1_LOGMESSAGES_COMPONENT_INJECTION_TOKEN,
  ILOG_MESSAGE_SERVICE_FOR_MFE1_LOGMESSAGE_TESTER_COMPONENT_INJECTION_TOKEN
} from './lib/model/i-log-message-service';
export {
  LogMessageServiceProviderModule
} from './lib/interaction/log-message-service-provider.module';
