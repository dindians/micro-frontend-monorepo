import {InjectionToken} from "@angular/core";
import {
  IHostHeaderComponent,
  IHostHomeComponent,
  IMfe1LogMessagesComponent,
  IMfe1LogMessageTesterComponent
} from "@lib/log-messages";

export const IHOST_HEADER_COMPONENT_INJECTION_TOKEN = new InjectionToken<IHostHeaderComponent>('IHOST_HEADER_COMPONENT');
export const IHOST_HOME_COMPONENT_INJECTION_TOKEN = new InjectionToken<IHostHomeComponent>('IHOST_HOME_COMPONENT');
export const IMFE1_LOGMESSAGES_COMPONENT_INJECTION_TOKEN = new InjectionToken<IMfe1LogMessagesComponent>('IMFE1_LOGMESSAGES_COMPONENT');
export const IMFE1_LOGMESSAGE_TESTER_COMPONENT_INJECTION_TOKEN = new InjectionToken<IMfe1LogMessageTesterComponent>('IMFE1_LOGMESSAGE_TESTER_COMPONENT');
