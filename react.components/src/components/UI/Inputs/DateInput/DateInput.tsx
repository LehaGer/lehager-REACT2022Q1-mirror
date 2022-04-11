import React from 'react';
import ItemStyles from './DateInput.module.css';
import { IDateInputProps } from '../../../../types/interfaces';

class DateInput extends React.Component<IDateInputProps> {
  private readonly input = React.createRef<HTMLInputElement>();
  private readonly errorMsg = React.createRef<HTMLDivElement>();

  constructor(props: IDateInputProps) {
    super(props);

    this.setStatus = this.setStatus.bind(this);
  }

  getValue() {
    return this.input.current?.value;
  }

  setStatus(isCorrect: boolean) {
    if (isCorrect) {
      if (this.errorMsg.current) this.errorMsg.current.className = 'hidden';
    } else {
      if (this.errorMsg.current) this.errorMsg.current.className = 'showed';
    }
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
        <div ref={this.errorMsg} className={this.props.isCorrectFormat ? 'hidden' : 'showed'}>
          {this.props.formatInstruction}
        </div>
      </div>
    );
  }
}

export default DateInput;
