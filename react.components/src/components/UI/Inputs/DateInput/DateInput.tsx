import React from 'react';
import ItemStyles from './DateInput.module.css';
import { IDateInputProps } from '../../../../types/interfaces';
import { FieldError } from 'react-hook-form';

const DateInput = <TFormValues extends Record<string, unknown>>({
  id,
  name,
  label,
  register,
  rules,
  errors,
}: IDateInputProps<TFormValues>) => {
  return (
    <div className={ItemStyles.dateInput} data-testid="DateInput">
      <div>
        <label htmlFor={id}>{label}</label>
        <input type="date" id={id} {...register(name, rules)} />
      </div>
      <div className={errors?.[name] ? 'showed' : 'hidden'}>
        {(errors?.[name] as unknown as FieldError)?.message}
      </div>
    </div>
  );
};

export default DateInput;
