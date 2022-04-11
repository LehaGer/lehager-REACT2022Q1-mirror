import React from 'react';
import ItemStyles from './SubmitInput.module.css';
import { ISubmitInput } from '../../../../types/interfaces';

class SubmitInput extends React.Component<ISubmitInput> {
  constructor(props: ISubmitInput) {
    super(props);
  }

  render() {
    return (
      <input
        className={ItemStyles.submitInput}
        type="submit"
        value={this.props.value}
        ref={this.props.reference}
        data-testid="SubmitInput"
      />
    );
  }
}

export default SubmitInput;
