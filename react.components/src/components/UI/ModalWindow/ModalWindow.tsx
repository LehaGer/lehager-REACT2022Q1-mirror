import React, { FC } from 'react';
import ItemStyles from './ModalWindow.module.css';
import { IModalWindowProps } from '../../../types/interfaces';

const ModalWindow: FC<IModalWindowProps> = ({ visible, setVisible, children }) => {
  return (
    <div
      className={ItemStyles.modalWindow + (visible ? ' ' + ItemStyles.active : '')}
      onClick={() => setVisible(false)}
      data-testid="ModalWindow"
    >
      <div
        className={ItemStyles.modalWindowContent}
        onClick={(e: React.MouseEvent) => e.stopPropagation()}
      >
        {children}
        <span
          className={ItemStyles.closeBtn}
          onClick={() => setVisible(false)}
          data-testid="ModalWindowCloseBtn"
        >
          &times;
        </span>
      </div>
    </div>
  );
};

export default ModalWindow;
