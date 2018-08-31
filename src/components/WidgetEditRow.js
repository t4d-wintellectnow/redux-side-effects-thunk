import * as React from 'react';
import * as PropTypes from 'prop-types';
import { omit } from 'lodash';

import './WidgetEditRow.css';

import { widgetPropType } from '../propTypes';
import { onNumberChange, onStringChange } from '../utils/onChange';

export class WidgetEditRow extends React.Component {

  static propTypes = {
    widget: widgetPropType.isRequired,
    onSaveWidget: PropTypes.func.isRequired,
    onCancelWidget: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      ...omit(props.widget, ['id']),
    };

    this.onStringChange = onStringChange(this);
    this.onNumberChange = onNumberChange(this);
  }

  saveWidget() {
    this.props.onSaveWidget({
      ...this.state,
      id: this.props.widget.id,
    });
  }

  render() {
    return <tr>
      <td>{this.props.widget.id}</td>
      <td><input type="text" id="edit-widget-name" name="name" value={this.state.name} onChange={this.onStringChange} /></td>
      <td><input type="text" id="edit-widget-description" name="description" value={this.state.name} onChange={this.onStringChange} /></td>
      <td><input type="text" id="edit-widget-color" name="color" value={this.state.name} onChange={this.onStringChange} /></td>
      <td><input type="text" id="edit-widget-size" name="size" value={this.state.name} onChange={this.onStringChange} /></td>
      <td><input type="number" id="edit-widget-quantity" name="quantity" value={this.state.name} onChange={this.onNumberChange} /></td>
      <td><input type="number" id="edit-widget-price" name="price" value={this.state.name} onChange={this.onNumberChange} /></td>
      <td>
        <button onClick={() => this.saveWidget()}>Save</button>
        <button onClick={() => this.props.onCancelWidget()}>Cancel</button>
      </td>
    </tr>;
  }
}
