import React from 'react';
import ItemStyles from './ModalWindow.module.css';

export interface IModalWindowProps {
  visible: boolean;
  setVisible: (newState: boolean) => void;
}

class ModalWindow extends React.Component<IModalWindowProps> {
  constructor(props: IModalWindowProps) {
    super(props);
  }

  render() {
    return (
      <div
        className={ItemStyles.modalWindow + (this.props.visible ? ' ' + ItemStyles.active : '')}
        onClick={() => this.props.setVisible(false)}
      >
        <div
          className={ItemStyles.modalWindowContent}
          onClick={(e: React.MouseEvent) => e.stopPropagation()}
        >
          {this.props.children}
          <span className={ItemStyles.closeBtn} onClick={() => this.props.setVisible(false)}>
            &times;
          </span>
        </div>
      </div>
    );
  }
}

export default ModalWindow;
