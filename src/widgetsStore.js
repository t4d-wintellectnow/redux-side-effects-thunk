import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { widgetsReducer } from './reducers/widgetsReducer';
import { editWidgetIdReducer } from './reducers/editWidgetIdReducer';

export const widgetsStore = createStore(combineReducers({
  widgets: widgetsReducer,
  editWidgetId: editWidgetIdReducer,
}), composeWithDevTools());