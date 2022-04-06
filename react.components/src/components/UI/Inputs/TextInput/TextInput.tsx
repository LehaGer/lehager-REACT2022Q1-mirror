import React, { RefObject } from 'react';
import ItemStyles from './TextInput.module.css';

interface ITextInput {
  id: string;
  name: string;
  defaultValue: string | '';
  reference: RefObject<HTMLInputElement>;
  formatInstruction: string;
  isCorrectFormat: boolean | true;
  label: string;
}

class TextInput extends React.Component<ITextInput> {
  constructor(props: ITextInput) {
    super(props);
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

export default TextInput;
