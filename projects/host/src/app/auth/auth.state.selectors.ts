import {createFeatureSelector, createSelector, select, Store} from "@ngrx/store";
import {map} from "rxjs/operators";
import {authStateName, IAuthState} from "./i-auth-state";

const authFeatureSelector = createFeatureSelector<IAuthState>(authStateName())
const userSelector = createSelector(authFeatureSelector, state => state.user);
export const userContext = (store: Store<IAuthState>) => store.pipe(select(userSelector)).pipe(map((userOrUndefined) => { return { user: userOrUndefined }; }));
