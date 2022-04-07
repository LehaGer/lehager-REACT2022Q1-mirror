import React from 'react';
import ItemStyles from './FileUploadInput.module.css';
import { IFileUploadInput } from '../../../../types/interfaces';

class FileUploadInput extends React.Component<IFileUploadInput> {
  constructor(props: IFileUploadInput) {
    super(props);
  }

  render() {
    return (
      <div className={ItemStyles.fileUploadInput}>
        <div>
          <label htmlFor={this.props.id}>{this.props.label}</label>
          <input
            type="file"
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

export default FileUploadInput;
