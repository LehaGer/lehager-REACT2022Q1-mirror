import React, { RefObject } from 'react';
import ItemStyles from './DateInput.module.css';

interface IDateInput {
  id: string;
  name: string;
  defaultValue: string | '';
  reference: RefObject<HTMLInputElement>;
  formatInstruction: string;
  isCorrectFormat: boolean | true;
  label: string;
}

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
