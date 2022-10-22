import React from 'react';
import ItemStyles from './SubmitInput.module.css';
import { ISubmitInputProps } from '../../../../types/interfaces';

class SubmitInput extends React.Component<ISubmitInputProps> {
  private readonly input = React.createRef<HTMLInputElement>();

  constructor(props: ISubmitInputProps) {
    super(props);
  }

  render() {
    return (
      <input
        className={ItemStyles.submitInput}
        type="submit"
        id={this.props.id}
        name={this.props.name}
        value={this.props.value}
        ref={this.input}
        disabled={this.props.isDisabled}
        data-testid="SubmitInput"
      />
    );
  }
}

export default SubmitInput;
