import React from 'react';
import ItemStyles from './CheckboxInput.module.css';
import { ICheckboxInputProps } from '../../../../types/interfaces';
import { FieldError } from 'react-hook-form';

const CheckboxInput = <TFormValues extends Record<string, unknown>>({
  id,
  name,
  label,
  register,
  rules,
  errors,
}: ICheckboxInputProps<TFormValues>) => {
  return (
    <div className={ItemStyles.checkboxInput} data-testid="CheckBoxInput">
      <div>
        <input type="checkbox" id={id} {...register(name, rules)} />
        <label htmlFor={id}>{label}</label>
      </div>
      <div className={errors?.[name] ? 'showed' : 'hidden'}>
        {(errors?.[name] as unknown as FieldError)?.message}
      </div>
    </div>
  );
};

export default CheckboxInput;
