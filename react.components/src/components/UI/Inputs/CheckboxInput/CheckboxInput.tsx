import React from 'react';
import ItemStyles from './CheckboxInput.module.css';
import { ICheckboxInput } from '../../../../types/interfaces';

class CheckboxInput extends React.Component<ICheckboxInput> {
  constructor(props: ICheckboxInput) {
    super(props);
  }

  render() {
    return (
      <div className={ItemStyles.checkboxInput}>
        <div>
          <input
            type="checkbox"
            defaultChecked={this.props.defaultChecked}
            id={this.props.id}
            name={this.props.name}
            ref={this.props.reference}
          />
          <label htmlFor={this.props.id}>{this.props.label}</label>
        </div>
        <div className={this.props.isCorrectFormat ? 'hidden' : 'showed'}>
          {this.props.formatInstruction}
        </div>
      </div>
    );
  }
}

export default CheckboxInput;
