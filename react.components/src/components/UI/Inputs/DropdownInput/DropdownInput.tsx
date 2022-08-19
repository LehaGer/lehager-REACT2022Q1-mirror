import React from 'react';
import ItemStyles from './DropdownInput.module.css';
import { IDropdownInputProps } from '../../../../types/interfaces';
import { FieldError } from 'react-hook-form';

const DropdownInput = <TFormValues extends Record<string, unknown>>({
  id,
  name,
  label,
  options,
  register,
  rules,
  errors,
}: IDropdownInputProps<TFormValues>) => {
  return (
    <div className={ItemStyles.dropdownInput} data-testid="DropdownInput">
      <div>
        <label htmlFor={id}>{label}</label>
        <select id={id} {...register(name, rules)}>
          <option value=""> </option>
          {options.map((el, key) => (
            <option key={key} value={el}>
              {el}
            </option>
          ))}
        </select>
      </div>
      {errors?.[name] && (
        <div className={'showed'}>{(errors?.[name] as unknown as FieldError).message}</div>
      )}
    </div>
  );
};

export default DropdownInput;
