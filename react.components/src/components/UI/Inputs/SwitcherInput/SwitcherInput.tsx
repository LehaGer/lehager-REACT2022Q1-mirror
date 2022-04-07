import React from 'react';
import ItemStyles from './SwitcherInput.module.css';
import { ISwitcherInput } from '../../../../types/interfaces';

class SwitcherInput extends React.Component<ISwitcherInput> {
  private readonly optionsRefs = this.props.options.map(() => React.createRef<HTMLInputElement>());

  constructor(props: ISwitcherInput) {
    super(props);

    this.changeHandler = this.changeHandler.bind(this);
  }

  value: string | undefined;

  changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.checked) this.value = event.target.id;
    /*this.value = undefined;
    this.optionsRefs.forEach((el) => {
      if (el.current?.checked) this.value = el.current?.id;
    });*/
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
                onChange={this.changeHandler}
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
