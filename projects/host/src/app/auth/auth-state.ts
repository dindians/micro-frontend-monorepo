import {IAuthState} from "./i-auth-state";
import {IUser} from "../model/i-user";

export class AuthState implements IAuthState {
  private constructor(readonly user?: IUser) {}

  static loggedOut(): IAuthState { return new AuthState(); }
  static loggedIn(user: IUser): IAuthState { return new AuthState(user); }
}
