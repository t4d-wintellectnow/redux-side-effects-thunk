import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  createAppendWidgetAction, createReplaceWidgetAction, createDeleteWidgetAction,
  createEditWidgetAction, createCancelEditWidgetAction
} from '../actions/widgetsActions';

import { WidgetTool } from './WidgetTool';

export const WidgetToolContainer = connect(
  ({ widgets, editWidgetId }) => ({ widgets, editWidgetId }),
  dispatch => bindActionCreators({
    appendWidget: createAppendWidgetAction,
    replaceWidget: createReplaceWidgetAction,
    deleteWidget: createDeleteWidgetAction,
    editWidget: createEditWidgetAction,
    cancelEditWidget: createCancelEditWidgetAction,
  }, dispatch),
)(WidgetTool);