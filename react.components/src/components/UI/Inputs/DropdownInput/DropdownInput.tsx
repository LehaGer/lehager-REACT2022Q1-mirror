import React from 'react';
import ItemStyles from './DropdownInput.module.css';
import { IDropdownInputProps } from '../../../../types/interfaces';

class DropdownInput extends React.Component<IDropdownInputProps> {
  private readonly select = React.createRef<HTMLSelectElement>();

  constructor(props: IDropdownInputProps) {
    super(props);
  }

  getValue() {
    return this.select.current?.value;
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
        <div className={this.props.isCorrectFormat ? 'hidden' : 'showed'}>
          {this.props.formatInstruction}
        </div>
      </div>
    );
  }
}

export default DropdownInput;
