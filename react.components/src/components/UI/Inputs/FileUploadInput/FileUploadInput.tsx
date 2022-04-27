import React from 'react';
import ItemStyles from './FileUploadInput.module.css';
import { IFileUploadInputProps } from '../../../../types/interfaces';
import { FieldError } from 'react-hook-form';

const FileUploadInput = <TFormValues extends Record<string, unknown>>({
  id,
  name,
  label,
  register,
  rules,
  errors,
}: IFileUploadInputProps<TFormValues>) => {
  return (
    <div className={ItemStyles.fileUploadInput} data-testid="FileUploadInput">
      <div>
        <label htmlFor={id}>{label}</label>
        <input type="file" id={id} {...register(name, rules)} />
      </div>
      <div className={errors?.[name] ? 'showed' : 'hidden'}>
        {(errors?.[name] as unknown as FieldError)?.message}
      </div>
    </div>
  );
};

export default FileUploadInput;
