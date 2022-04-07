import React from 'react';
import ItemStyles from './DropdownInput.module.css';
import { IDropdownInput } from '../../../../types/interfaces';

class DropdownInput extends React.Component<IDropdownInput> {
  constructor(props: IDropdownInput) {
    super(props);
  }

  render() {
    return (
      <div className={ItemStyles.dropdownInput}>
        <div>
          <label htmlFor={this.props.id}>{this.props.label}</label>
          <select
            name={this.props.name}
            id={this.props.id}
            ref={this.props.reference}
            defaultValue={this.props.defaultValue}
          >
            <option value=""> </option>
            {this.props.options.map((el, key) => (
              <option key={key} value={el}>
                {el}
              </option>
            ))}
            <option value="Åland Islands">Åland Islands</option>
            <option value="Belarus">Belarus</option>
            <option value="Canada">Canada</option>
            <option value="El Salvador">El Salvador</option>
            <option value="France">France</option>
            <option value="Gambia">Gambia</option>
            <option value="Honduras">Honduras</option>
            <option value="Ireland">Ireland</option>
            <option value="Japan">Japan</option>
            <option value="Kazakhstan">Kazakhstan</option>
            <option value="Latvia">Latvia</option>
            <option value="Macao">Macao</option>
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
