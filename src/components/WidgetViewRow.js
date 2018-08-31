import * as React from 'react';
import * as PropTypes from 'prop-types';

import './WidgetViewRow.css';

import { widgetPropType } from '../propTypes';

const currencyFormatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

export const WidgetViewRow = props =>
  <tr className='widget-view-row'>
    <td>{props.widget.id}</td>
    <td>{props.widget.name}</td>
    <td>{props.widget.description}</td>
    <td>{props.widget.color}</td>
    <td>{props.widget.size}</td>
    <td>{props.widget.quantity}</td>
    <td>{currencyFormatter.format(props.widget.price)}</td>
    <td>
      <button onClick={() => props.onEditWidget(props.widget.id)}>Edit</button>
      <button onClick={() => props.onDeleteWidget(props.widget.id)}>Delete</button>
    </td>
  </tr>;

WidgetViewRow.propTypes = {
  widget: widgetPropType.isRequired,
  onEditWidget: PropTypes.func.isRequired,
  onDeleteWidget: PropTypes.func.isRequired,
};