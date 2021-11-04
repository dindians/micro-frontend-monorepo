import {createFeatureSelector, createSelector, select, Store} from "@ngrx/store";
import {map} from "rxjs/operators";
import {authStateFeatureName, IAuthState} from "./i-auth-state";

const authFeatureSelector = createFeatureSelector<IAuthState>(authStateFeatureName)
const userSelector = createSelector(authFeatureSelector, state => state.user);
export const userContext = (store: Store<IAuthState>) => store.pipe(select(userSelector)).pipe(map((userOrUndefined) => { return { user: userOrUndefined }; }));
