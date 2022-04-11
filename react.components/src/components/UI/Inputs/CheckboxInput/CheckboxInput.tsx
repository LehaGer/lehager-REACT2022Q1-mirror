import React from 'react';
import ItemStyles from './CheckboxInput.module.css';
import { ICheckboxInputProps } from '../../../../types/interfaces';

class CheckboxInput extends React.Component<ICheckboxInputProps> {
  private readonly input = React.createRef<HTMLInputElement>();
  private readonly errorMsg = React.createRef<HTMLDivElement>();

  constructor(props: ICheckboxInputProps) {
    super(props);

    this.setStatus = this.setStatus.bind(this);
  }

  isChecked() {
    return this.input.current?.checked;
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
      <div className={ItemStyles.checkboxInput} data-testid="CheckBoxInput">
        <div>
          <input
            type="checkbox"
            defaultChecked={this.props.defaultChecked}
            id={this.props.id}
            name={this.props.name}
            ref={this.input}
            onChange={this.props.onChange}
          />
          <label htmlFor={this.props.id}>{this.props.label}</label>
        </div>
        <div ref={this.errorMsg} className={this.props.isCorrectFormat ? 'hidden' : 'showed'}>
          {this.props.formatInstruction}
        </div>
      </div>
    );
  }
}

export default CheckboxInput;
