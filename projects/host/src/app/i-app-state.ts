import {ILogMessagesState} from "@lib/log-messages";
import {IAuthState} from "./auth/i-auth-state";

export interface IAppState {
  authState: IAuthState;
  logMessagesState: ILogMessagesState;
}
