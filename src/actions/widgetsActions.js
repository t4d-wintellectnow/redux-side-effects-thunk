import {
  APPEND_WIDGET, REPLACE_WIDGET, DELETE_WIDGET,
  EDIT_WIDGET, CANCEL_EDIT_WIDGET
} from '../actionTypes';

export const createAppendWidgetAction = payload => ({ type: APPEND_WIDGET, payload });
export const createReplaceWidgetAction = payload => ({ type: REPLACE_WIDGET, payload });
export const createDeleteWidgetAction = payload => ({ type: DELETE_WIDGET, payload });
export const createEditWidgetAction = payload => ({ type: EDIT_WIDGET, payload });
export const createCancelEditWidgetAction = payload => ({ type: CANCEL_EDIT_WIDGET, payload });