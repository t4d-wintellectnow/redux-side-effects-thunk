import * as React from 'react';
import * as PropTypes from 'prop-types';
import { uniqueId } from 'lodash';

import { onNumberChange, onStringChange } from '../utils/onChange';


export class WidgetForm extends React.Component {

  static propTypes = {
    onSubmitWidget: PropTypes.func.isRequired,
    buttonText: PropTypes.string,
  };

  static defaultProps = {
    buttonText: 'Submit Widget',
  };

  constructor(props) {
    super(props);

    this.formControlId = uniqueId();

    this.state = this.getInitialState();

    this.onStringChange = onStringChange(this);
    this.onNumberChange = onNumberChange(this);
  }

  getInitialState() {
    return {
      name: '',
      description: '',
      color: '',
      size: '',
      quantity: 0,
      price: 0,
    };
  }

  submitWidget() {
    this.props.onSubmitWidget({ ...this.state });
    this.setState(this.getInitialState());
  }

  render() {
    return <form>
      <div>
        <label htmlFor="widget-name-{this.formControlId}">Name:</label>
        <input type="text" id="widget-name-{this.formControlId}" name="name"
          value={this.state.name} onChange={this.onStringChange} />
      </div>
      <div>
        <label htmlFor="widget-description-{this.formControlId}">Description:</label>
        <input type="text" id="widget-description-{this.formControlId}" name="description"
          value={this.state.description} onChange={this.onStringChange} />
      </div>
      <div>
        <label htmlFor="widget-color-{this.formControlId}">Color:</label>
        <input type="text" id="widget-color-{this.formControlId}" name="color"
          value={this.state.color} onChange={this.onStringChange} />
      </div>
      <div>
        <label htmlFor="widget-size-{this.formControlId}">Size:</label>
        <input type="text" id="widget-size-{this.formControlId}" name="size"
          value={this.state.size} onChange={this.onStringChange} />
      </div>
      <div>
        <label htmlFor="widget-quantity-{this.formControlId}">Quantity:</label>
        <input type="text" id="widget-quantity-{this.formControlId}" name="quantity"
          value={this.state.quantity} onChange={this.onNumberChange} />
      </div>
      <div>
        <label htmlFor="widget-price-{this.formControlId}">Price:</label>
        <input type="text" id="widget-price-{this.formControlId}" name="price"
          value={this.state.price} onChange={this.onNumberChange} />
      </div>
      <button onClick={this.submitWidget()}>{this.props.buttonText}</button>
    </form>;
  }

}
