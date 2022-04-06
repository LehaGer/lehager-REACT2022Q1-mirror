import React from 'react';
import ItemStyles from './SubmitInput.module.css';

interface ISubmitInput {
  value: string;
}

class SubmitInput extends React.Component<ISubmitInput> {
  constructor(props: ISubmitInput) {
    super(props);
  }

  render() {
    return <input className={ItemStyles.submitInput} type="submit" value={this.props.value} />;
  }
}

export default SubmitInput;
