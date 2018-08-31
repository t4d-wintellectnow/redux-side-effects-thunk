import * as React from 'react';
import * as PropTypes from 'prop-types';
import { omit } from 'lodash';

import './WidgetEditRow.css';

import { widgetPropType } from '../propTypes';
import { applyOnChangeTypes } from '../utils';

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

    applyOnChangeTypes(this, ['String','Number']);
  }

  saveWidget() {
    this.props.onSaveWidget({
      ...this.state,
      id: this.props.widget.id,
    });
  }

  render() {
    return <tr className='widget-edit-row'>
      <td>{this.props.widget.id}</td>
      <td><input type="text" id="edit-widget-name" name="name"
        value={this.state.name} onChange={this.onStringChange} /></td>
      <td><input type="text" id="edit-widget-description" name="description"
        value={this.state.description} onChange={this.onStringChange} /></td>
      <td><input type="text" id="edit-widget-color" name="color"
        value={this.state.color} onChange={this.onStringChange} /></td>
      <td><input type="text" id="edit-widget-size" name="size"
        value={this.state.size} onChange={this.onStringChange} /></td>
      <td><input type="number" id="edit-widget-quantity" name="quantity"
        value={this.state.quantity} onChange={this.onNumberChange} /></td>
      <td><input type="number" id="edit-widget-price" name="price"
        value={this.state.price} onChange={this.onNumberChange} /></td>
      <td>
        <button type="button" onClick={() => this.saveWidget()}>Save</button>
        <button type="button" onClick={() => this.props.onCancelWidget()}>Cancel</button>
      </td>
    </tr>;
  }
}
