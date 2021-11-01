import {createAction, props} from "@ngrx/store";
import {IUser} from "../model/i-user";

export const loggedIn = createAction('[Auth] Logged In', props<{ user: IUser }>());
export const loggedOut = createAction('[Auth] Logged Out');
