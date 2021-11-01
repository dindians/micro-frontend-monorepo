import {IAuthState} from "./i-auth-state";
import {AuthState} from "./auth-state";
import {IUser} from "../model/i-user";

export class AuthStates {
  static loggedInState(user: IUser): IAuthState { return AuthState.loggedIn(user); }
  static loggedOutState(): IAuthState { return AuthState.loggedOut(); }
}
