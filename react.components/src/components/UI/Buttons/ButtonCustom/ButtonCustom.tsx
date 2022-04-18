import React from 'react';
import ItemStyles from './ButtonCustom.module.css';
import { IButtonCustom } from '../../../../types/interfaces';

class ButtonCustom extends React.Component<IButtonCustom> {
  constructor(props: IButtonCustom) {
    super(props);
  }

  render() {
    return (
      <button
        className={ItemStyles.btnCustom}
        onClick={this.props.onClick}
        data-testid={this.props['data-testid']}
      >
        {this.props.children}
      </button>
    );
  }
}

export default ButtonCustom;
