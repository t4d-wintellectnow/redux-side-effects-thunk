import * as React from 'react';
import * as PropTypes from 'prop-types';

import { widgetsPropType, editWidgetIdPropType } from '../propTypes';
import { WidgetTable, WidgetForm } from './';

export class WidgetTool extends React.Component {

  static propTypes = {
    widgets: widgetsPropType.isRequired,
    editWidgetId: editWidgetIdPropType.isRequired,
    appendWidget: PropTypes.func.isRequired,
    replaceWidget: PropTypes.func.isRequired,
    deleteWidget: PropTypes.func.isRequired,
    editWidget: PropTypes.func.isRequired,
    cancelEditWidget: PropTypes.func.isRequired,
  };

  render() {
    return <React.Fragment>
      <WidgetTable widgets={this.props.widgets} editWidgetId={this.props.editWidgetId}
        onDeleteWidget={this.props.deleteWidget} onEditWidget={this.props.editWidget}
        onSaveWidget={this.props.replaceWidget} onCancelWidget={this.props.cancelEditWidget} />
      <WidgetForm onSubmitWidget={this.props.appendWidget} buttonText="Add Widget" />
    </React.Fragment>
  }
}