import {createFeatureSelector, createSelector} from "@ngrx/store";
import {authStateFeatureName, IAuthState} from "./i-auth-state";

const authFeatureSelector = createFeatureSelector<IAuthState>(authStateFeatureName)
const auth = createSelector(authFeatureSelector, state => state)
export const user = createSelector(auth, state => state.user);
