import {createAction, props} from "@ngrx/store";
import {LogMessage} from "@lib/log-messages";

export const addLogMessage = createAction('[log-messages] Add LogMessage', props<{ logMessage: LogMessage }>());
export const deleteLogMessage = createAction('[log-messages] Delete LogMessage', props<{ logMessage: LogMessage}>());
export const deleteLogMessages = createAction('[log-messages] Delete LogMessages');
