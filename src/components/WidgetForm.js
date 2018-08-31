import * as React from 'react';
import * as PropTypes from 'prop-types';

import { applyFormControls, applyOnChangeTypes } from '../utils';


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

    this.state = this.getInitialState();

    applyFormControls(this);
    applyOnChangeTypes(this);
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

  submitWidget = evt => {
    evt.preventDefault();

    this.props.onSubmitWidget({ ...this.state });
    this.setState(this.getInitialState());
  }

  render() {
    return <form>
      <div>
        <label htmlFor={this.formControlName('widget-name')}>Name:</label>
        <input type="text" id={this.formControlName('widget-name')} name="name"
          value={this.state.name} onChange={this.onStringChange} />
      </div>
      <div>
        <label htmlFor={this.formControlName('widget-description')}>Description:</label>
        <input type="text" id={this.formControlName('widget-description')} name="description"
          value={this.state.description} onChange={this.onStringChange} />
      </div>
      <div>
        <label htmlFor={this.formControlName('widget-color')}>Color:</label>
        <input type="text" id={this.formControlName('widget-color')} name="color"
          value={this.state.color} onChange={this.onStringChange} />
      </div>
      <div>
        <label htmlFor={this.formControlName('widget-size')}>Size:</label>
        <input type="text" id={this.formControlName('widget-size')} name="size"
          value={this.state.size} onChange={this.onStringChange} />
      </div>
      <div>
        <label htmlFor={this.formControlName('widget-quantity')}>Quantity:</label>
        <input type="number" id={this.formControlName('widget-quantity')} name="quantity"
          value={this.state.quantity} onChange={this.onNumberChange} />
      </div>
      <div>
        <label htmlFor={this.formControlName('widget-price')}>Price:</label>
        <input type="number" id={this.formControlName('widget-price')} name="price"
          value={this.state.price} onChange={this.onNumberChange} />
      </div>
      <button onClick={this.submitWidget}>{this.props.buttonText}</button>
    </form>;
  }

}
