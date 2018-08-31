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
        deleteWidget={this.props.deleteWidget} editWidget={this.props.editWidget}
        saveWidget={this.props.replaceWidget} cancelWidget={this.props.cancelEditWidget} />
      <WidgetForm onSubmit={this.props.appendWidget} buttonText="Add Widget" />
    </React.Fragment>
  }
}