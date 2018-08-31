import * as React from 'react';
import * as PropTypes from 'prop-types';

import './WidgetTable.css';

import { widgetsPropType, editWidgetIdPropType } from '../propTypes';
import { WidgetViewRow, WidgetEditRow } from './';

export const WidgetTable = props => <table className="widget-table">
  <thead>
    <tr>
      <th>Id</th>
      <th><label htmlFor="edit-widget-name">Name</label></th>
      <th><label htmlFor="edit-widget-description">Description</label></th>
      <th><label htmlFor="edit-widget-color">Color</label></th>
      <th><label htmlFor="edit-widget-size">Size</label></th>
      <th><label htmlFor="edit-widget-quantity">Quantity</label></th>
      <th><label htmlFor="edit-widget-price">Price</label></th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {props.widgets.map(w => w.id === props.editWidgetId
      ? <WidgetEditRow key={w.id} widget={w} onSaveWidget={props.onSaveWidget} onCancelWidget={props.onCancelWidget} />
      : <WidgetViewRow key={w.id} widget={w} onEditWidget={props.onEditWidget} onDeleteWidget={props.onDeleteWidget} />)}
  </tbody>
</table>;

WidgetTable.propTypes = {
  widgets: widgetsPropType.isRequired,
  editWidgetId: editWidgetIdPropType.isRequired,
  onSaveWidget: PropTypes.func.isRequired,
  onDeleteWidget: PropTypes.func.isRequired,
  onEditWidget: PropTypes.func.isRequired,
  onCancelWidget: PropTypes.func.isRequired,
};
