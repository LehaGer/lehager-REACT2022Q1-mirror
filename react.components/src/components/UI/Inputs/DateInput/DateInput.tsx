import React from 'react';
import ItemStyles from './DateInput.module.css';
import { IDateInputProps } from '../../../../types/interfaces';

class DateInput extends React.Component<IDateInputProps> {
  private readonly input = React.createRef<HTMLInputElement>();

  constructor(props: IDateInputProps) {
    super(props);
  }

  getValue() {
    return this.input.current?.value;
  }

  render() {
    return (
      <div className={ItemStyles.dateInput} data-testid="DateInput">
        <div>
          <label htmlFor={this.props.id}>{this.props.label}</label>
          <input
            type="date"
            defaultValue={this.props.defaultValue}
            id={this.props.id}
            name={this.props.name}
            ref={this.input}
            onChange={this.props.onChange}
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
