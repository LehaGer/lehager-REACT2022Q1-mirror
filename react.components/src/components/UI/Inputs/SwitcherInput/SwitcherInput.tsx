import React from 'react';
import ItemStyles from './SwitcherInput.module.css';
import { ISwitcherInputProps } from '../../../../types/interfaces';

class SwitcherInput extends React.Component<ISwitcherInputProps> {
  private readonly optionsRefs = this.props.options.map(() => React.createRef<HTMLInputElement>());

  constructor(props: ISwitcherInputProps) {
    super(props);
  }

  getValue(): string | undefined {
    let value = undefined;
    this.optionsRefs.forEach((el) => {
      if (el.current?.checked) value = el.current?.id;
    });
    return value;
  }

  render() {
    return (
      <div className={ItemStyles.switcherInput} data-testid="SwitcherInput">
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
        <div className={this.props.isCorrectFormat ? 'hidden' : 'showed'}>
          {this.props.formatInstruction}
        </div>
      </div>
    );
  }
}

export default SwitcherInput;
