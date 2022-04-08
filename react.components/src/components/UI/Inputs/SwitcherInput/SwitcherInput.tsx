import React from 'react';
import ItemStyles from './SwitcherInput.module.css';
import { ISwitcherInputProps } from '../../../../types/interfaces';

class SwitcherInput extends React.Component<ISwitcherInputProps> {
  private readonly optionsRefs = this.props.options.map(() => React.createRef<HTMLInputElement>());
  private readonly errorMsg = React.createRef<HTMLDivElement>();

  constructor(props: ISwitcherInputProps) {
    super(props);

    this.setStatus = this.setStatus.bind(this);
  }

  getValue(): string | undefined {
    let value = undefined;
    this.optionsRefs.forEach((el) => {
      if (el.current?.checked) value = el.current?.id;
    });
    return value;
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
      <div className={ItemStyles.switcherInput}>
        <div>
          {this.props.options.map((el, key) => (
            <div key={key}>
              <input
                type="radio"
                id={el.id}
                name={this.props.name}
                defaultChecked={el.defaultChecked}
                ref={this.optionsRefs[key]}
                onChange={this.props.onChange}
              />
              <label htmlFor={el.id}>{el.label}</label>
            </div>
          ))}
        </div>
        <div ref={this.errorMsg} className={this.props.isCorrectFormat ? 'hidden' : 'showed'}>
          {this.props.formatInstruction}
        </div>
      </div>
    );
  }
}

export default SwitcherInput;
