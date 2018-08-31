import {
  APPEND_WIDGET, REPLACE_WIDGET, DELETE_WIDGET,
} from '../actionTypes';

export const widgetsReducer = (state = [], action) => {

  switch (action.type) {
    case APPEND_WIDGET:
      return [ ...state, {
        ...action.payload,
        id: Math.max(0, ...state.map(w => w.id)) + 1,
      }];
    case REPLACE_WIDGET:
      const widgetIndex = state.findIndex(w => w.id === action.payload.id);
      const newWidgets = state.concat();
      newWidgets[widgetIndex] = action.payload;
      return newWidgets;
    case DELETE_WIDGET:
      return state.filter(w => w.id !== action.payload);
    default:
      return state;
  }

};