import React from 'react';
import ItemStyles from './TextInput.module.css';
import { ITextInputProps } from '../../../../types/interfaces';

class TextInput extends React.Component<ITextInputProps> {
  private readonly input = React.createRef<HTMLInputElement>();

  constructor(props: ITextInputProps) {
    super(props);
  }

  getValue() {
    return this.input.current?.value;
  }

  render() {
    return (
      <div className={ItemStyles.textInput} data-testid="TextInput">
        <div>
          <label htmlFor={this.props.id}>{this.props.label}</label>
          <input
            type="text"
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

export default TextInput;
