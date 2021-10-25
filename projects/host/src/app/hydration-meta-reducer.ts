import {ActionReducer, INIT} from "@ngrx/store";
import {IAppState} from "./i-app-state";

export const hydrationMetaReducer = (
  reducer: ActionReducer<IAppState>
): ActionReducer<IAppState> => {
  return (state, action) => {
    const appStateKey = 'appState-proto';
    if (action.type === INIT) {
      const storageValue = localStorage.getItem(appStateKey);
      if (storageValue) {
        try {
          return JSON.parse(storageValue);
        } catch {
          localStorage.removeItem(appStateKey);
        }
      }
    }
    const nextState = reducer(state, action);
    localStorage.setItem(appStateKey, JSON.stringify(nextState));
    return nextState;
  };
};
