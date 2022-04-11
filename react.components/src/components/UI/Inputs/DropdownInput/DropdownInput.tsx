import React from 'react';
import ItemStyles from './DropdownInput.module.css';
import { IDropdownInputProps } from '../../../../types/interfaces';

class DropdownInput extends React.Component<IDropdownInputProps> {
  private readonly select = React.createRef<HTMLSelectElement>();
  private readonly errorMsg = React.createRef<HTMLDivElement>();

  constructor(props: IDropdownInputProps) {
    super(props);

    this.setStatus = this.setStatus.bind(this);
  }

  getValue() {
    return this.select.current?.value;
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
      <div className={ItemStyles.dropdownInput} data-testid="DropdownInput">
        <div>
          <label htmlFor={this.props.id}>{this.props.label}</label>
          <select
            name={this.props.name}
            id={this.props.id}
            ref={this.select}
            defaultValue={this.props.defaultValue}
            onChange={this.props.onChange}
          >
            <option value=""> </option>
            {this.props.options.map((el, key) => (
              <option key={key} value={el}>
                {el}
              </option>
            ))}
          </select>
        </div>
        <div ref={this.errorMsg} className={this.props.isCorrectFormat ? 'hidden' : 'showed'}>
          {this.props.formatInstruction}
        </div>
      </div>
    );
  }
}

export default DropdownInput;
