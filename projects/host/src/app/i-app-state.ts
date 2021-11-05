import {ILogMessagesState} from "@lib/log-messages";
import {IAuthState} from "./auth/i-auth-state";

export interface IAppState {
  authStateName(): IAuthState;
  logMessagesStateName(): ILogMessagesState;
}
