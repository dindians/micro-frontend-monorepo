/*
 * Public API Surface of log-message-model
 */

import {LogLevel} from "./lib/model/log-level";

export { LogLevel } from './lib/model/log-level';
export { LogMessage } from './lib/model/log-message';
export { ILogMessagesState } from './lib/model/i-log-messages-state';
export {
  IHostHeaderComponent,
  IHostHomeComponent,
  IHostDummyAuthenticationComponent,
  IMfe1LogMessagesComponent,
  IMfe1LogMessageTesterComponent,
  IHOST_HEADER_COMPONENT_INJECTION_TOKEN,
  IHOST_HOME_COMPONENT_INJECTION_TOKEN,
  IHOST_DUMMY_AUTHENTICATION_COMPONENT_INJECTION_TOKEN,
  IMFE1_LOGMESSAGES_COMPONENT_INJECTION_TOKEN,
  IMFE1_LOGMESSAGE_TESTER_COMPONENT_INJECTION_TOKEN,
  LogMessagesInteractionModule
} from './lib/interaction/log-messages-interaction.module';
