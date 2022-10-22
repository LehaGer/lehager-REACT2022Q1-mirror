import React, { FC } from 'react';
import ItemStyles from './SubmitInput.module.css';
import { ISubmitInputProps } from '../../../../types/interfaces';

const SubmitInput: FC<ISubmitInputProps> = ({ id, name, value, isDisabled }) => {
  return (
    <input
      className={ItemStyles.submitInput}
      type="submit"
      id={id}
      name={name}
      value={value}
      disabled={isDisabled}
      data-testid="SubmitInput"
    />
  );
};

export default SubmitInput;
