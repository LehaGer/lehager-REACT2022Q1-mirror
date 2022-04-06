import React, { RefObject } from 'react';
import ItemStyles from './SwitcherInput.module.css';

interface ISwitcherInput {
  id: string;
  name: string;
  defaultChecked: boolean | false;
  reference: RefObject<HTMLInputElement>;
  formatInstruction: string;
  isCorrectFormat: boolean | true;
  label: string;
}

class SwitcherInput extends React.Component<ISwitcherInput> {
  constructor(props: ISwitcherInput) {
    super(props);
  }

  render() {
    return (
      <div className={ItemStyles.switcherInput}>
        <div>
          <input
            type="radio"
            defaultChecked={this.props.defaultChecked}
            id={this.props.id}
            name={this.props.name}
            ref={this.props.reference}
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

export default SwitcherInput;
