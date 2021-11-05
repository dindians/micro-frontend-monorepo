import {LogMessage} from "@lib/log-messages";

export const logMessagesStateName = () => 'logMessagesState';

export interface ILogMessagesState {
  readonly logMessages: LogMessage[];
}
