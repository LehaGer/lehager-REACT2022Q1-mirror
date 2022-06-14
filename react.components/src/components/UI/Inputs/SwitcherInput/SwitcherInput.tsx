import React from 'react';
import ItemStyles from './SwitcherInput.module.css';
import { ISwitcherInputProps } from '../../../../types/interfaces';
import { FieldError } from 'react-hook-form';

const SwitcherInput = <TFormValues extends Record<string, unknown>>({
  name,
  options,
  register,
  rules,
  errors,
}: ISwitcherInputProps<TFormValues>) => {
  return (
    <div className={ItemStyles.switcherInput} data-testid="SwitcherInput">
      <div>
        {options.map((el, key) => (
          <div key={key}>
            <input
              type="radio"
              id={el.id}
              value={el.id}
              {...(register ? register(name, rules) : [])}
            />
            <label htmlFor={el.id}>{el.label}</label>
          </div>
        ))}
      </div>
      <div className={errors?.[name] ? 'showed' : 'hidden'}>
        {(errors?.[name] as unknown as FieldError)?.message}
      </div>
    </div>
  );
};

export default SwitcherInput;
