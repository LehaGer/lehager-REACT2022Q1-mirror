import React from 'react';
import ItemStyles from './DateInput.module.css';
import { IDateInput } from '../../../../types/interfaces';

class DateInput extends React.Component<IDateInput> {
  constructor(props: IDateInput) {
    super(props);
  }

  render() {
    return (
      <div className={ItemStyles.dateInput}>
        <div>
          <label htmlFor={this.props.id}>{this.props.label}</label>
          <input
            type="date"
            defaultValue={this.props.defaultValue}
            id={this.props.id}
            name={this.props.name}
            ref={this.props.reference}
          />
        </div>
        <div className={this.props.isCorrectFormat ? 'hidden' : 'showed'}>
          {this.props.formatInstruction}
        </div>
      </div>
    );
  }
}

export default DateInput;
