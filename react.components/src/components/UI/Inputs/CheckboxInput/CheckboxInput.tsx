import React from 'react';
import ItemStyles from './CheckboxInput.module.css';
import { ICheckboxInputProps } from '../../../../types/interfaces';

class CheckboxInput extends React.Component<ICheckboxInputProps> {
  private readonly input = React.createRef<HTMLInputElement>();

  constructor(props: ICheckboxInputProps) {
    super(props);
  }

  isChecked() {
    return this.input.current ? this.input.current?.checked : false;
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
        <div className={this.props.isCorrectFormat ? 'hidden' : 'showed'}>
          {this.props.formatInstruction}
        </div>
      </div>
    );
  }
}

export default CheckboxInput;
