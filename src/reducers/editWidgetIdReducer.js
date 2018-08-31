import {
  APPEND_WIDGET, REPLACE_WIDGET, DELETE_WIDGET,
  EDIT_WIDGET, CANCEL_EDIT_WIDGET
} from '../actionTypes';


export const editWidgetIdReducer = (state = -1, action) => {

  switch (action.type) {
    case APPEND_WIDGET:
    case REPLACE_WIDGET:
    case DELETE_WIDGET:
    case CANCEL_EDIT_WIDGET:
      return -1;
    case EDIT_WIDGET:
      return action.payload;
    default:
      return state;
  }

};