import React from 'react';
import ItemStyles from './TextInput.module.css';
import { ITextInputProps } from '../../../../types/interfaces';

class TextInput extends React.Component<ITextInputProps> {
  private readonly input = React.createRef<HTMLInputElement>();
  private readonly errorMsg = React.createRef<HTMLDivElement>();

  constructor(props: ITextInputProps) {
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
      <div className={ItemStyles.textInput}>
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
        <div ref={this.errorMsg} className={this.props.isCorrectFormat ? 'hidden' : 'showed'}>
          {this.props.formatInstruction}
        </div>
      </div>
    );
  }
}

export default TextInput;
