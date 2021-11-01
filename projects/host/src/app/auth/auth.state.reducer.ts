import {createReducer, on} from "@ngrx/store";
import {IAuthState} from "./i-auth-state";
import {AuthStates} from "./auth.states";
import {loggedIn, loggedOut} from "./auth.actions";

export const authStateReducer = createReducer<IAuthState>(
  AuthStates.loggedOutState(),
  on(loggedIn, (state, action) => AuthStates.loggedInState(action.user)),
  on(loggedOut, _ => AuthStates.loggedOutState())
);
