import React, { FC } from 'react';
import ItemStyles from './ModalWindow.module.css';
import { IModalWindowProps } from '../../../types/interfaces';

const ModalWindow: FC<IModalWindowProps> = ({ onClose, children }) => {
  return (
    <div
      className={`${ItemStyles.modalWindow} ${ItemStyles.active}`}
      onClick={onClose}
      data-testid="ModalWindow"
    >
      <div
        className={ItemStyles.modalWindowContent}
        onClick={(e: React.MouseEvent) => e.stopPropagation()}
      >
        {children}
        <span className={ItemStyles.closeBtn} onClick={onClose} data-testid="ModalWindowCloseBtn">
          &times;
        </span>
      </div>
    </div>
  );
};

export default ModalWindow;
