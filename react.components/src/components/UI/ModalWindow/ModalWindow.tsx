import React from 'react';
import ItemStyles from './ModalWindow.module.css';
import { IModalWindowProps } from '../../../types/interfaces';

class ModalWindow extends React.Component<IModalWindowProps> {
  constructor(props: IModalWindowProps) {
    super(props);
  }

  render() {
    return (
      <div
        className={ItemStyles.modalWindow + (this.props.visible ? ' ' + ItemStyles.active : '')}
        onClick={() => this.props.setVisible(false)}
        data-testid="ModalWindow"
      >
        <div
          className={ItemStyles.modalWindowContent}
          onClick={(e: React.MouseEvent) => e.stopPropagation()}
        >
          {this.props.children}
          <span
            className={ItemStyles.closeBtn}
            onClick={() => this.props.setVisible(false)}
            data-testid="ModalWindowCloseBtn"
          >
            &times;
          </span>
        </div>
      </div>
    );
  }
}

export default ModalWindow;
