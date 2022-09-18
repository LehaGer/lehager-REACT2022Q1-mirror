import React from 'react';
import ItemStyles from './TextInput.module.css';
import { ITextInputProps } from '../../../../types/interfaces';
import { FieldError } from 'react-hook-form';

const TextInput = <TFormValues extends Record<string, unknown>>({
  id,
  name,
  label,
  register,
  rules,
  errors,
}: ITextInputProps<TFormValues>) => {
  return (
    <div className={ItemStyles.textInput} data-testid="TextInput">
      <div>
        <label htmlFor={id}>{label}</label>
        <input id={id} {...(register ? register(name, rules) : [])} />
      </div>
      {errors?.[name] && (
        <div className={errors?.[name] ? 'showed' : 'hidden'}>
          {(errors?.[name] as unknown as FieldError)?.message}
        </div>
      )}
    </div>
  );
};

export default TextInput;
