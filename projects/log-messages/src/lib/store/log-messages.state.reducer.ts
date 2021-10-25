import {createReducer, on} from "@ngrx/store";
import {environment} from "../../../../host/src/environments/environment";
import {addLogMessage, deleteLogMessage, deleteLogMessages, ILogMessagesState, LogMessagesStates} from "@lib/log-messages";

export const logMessagesStateReducer = createReducer<ILogMessagesState>(
  LogMessagesStates.initialState(),
  on(addLogMessage, (state, action) => { consoleLog('addLogMessage action'); return LogMessagesStates.logMessageAddedState(state, action.logMessage); }),
  on(deleteLogMessage, (state, action) => { consoleLog('deleteLogMessage action'); return LogMessagesStates.logMessageDeletedState(state, action.logMessage); }),
  on(deleteLogMessages, _ => { consoleLog('deleteLogMessages action'); return LogMessagesStates.logMessagesDeletedState(); })
);

function consoleLog(message?: any) {
  if(environment.production) return;
  console.log('[logmessages state-reducer] ' + message);
}
