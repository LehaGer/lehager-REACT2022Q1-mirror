import React from 'react';
import ItemStyles from './FileUploadInput.module.css';
import { IFileUploadInputProps } from '../../../../types/interfaces';

class FileUploadInput extends React.Component<IFileUploadInputProps> {
  private readonly input = React.createRef<HTMLInputElement>();
  private readonly errorMsg = React.createRef<HTMLDivElement>();

  constructor(props: IFileUploadInputProps) {
    super(props);

    this.setStatus = this.setStatus.bind(this);
  }

  getValue(): string | undefined {
    if (this.input.current && this.input.current?.files && this.input.current?.files[0]) {
      return URL.createObjectURL(this.input.current?.files[0]);
    } else return undefined;
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
      <div className={ItemStyles.fileUploadInput} data-testid="FileUploadInput">
        <div>
          <label htmlFor={this.props.id}>{this.props.label}</label>
          <input
            type="file"
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

export default FileUploadInput;
