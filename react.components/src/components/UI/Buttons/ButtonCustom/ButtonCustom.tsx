import React, { FC } from 'react';
import ItemStyles from './ButtonCustom.module.css';
import { IButtonCustomProps } from '../../../../types/interfaces';

const ButtonCustom: FC<IButtonCustomProps> = ({ onClick, children, ...props }) => {
  return (
    <button className={ItemStyles.btnCustom} onClick={onClick} data-testid={props['data-testid']}>
      {children}
    </button>
  );
};

export default ButtonCustom;
