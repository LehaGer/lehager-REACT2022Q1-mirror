import React from 'react';
import { UseFormRegister } from 'react-hook-form/dist/types/form';
import { Path, RegisterOptions } from 'react-hook-form';
import { FieldErrors } from 'react-hook-form/dist/types/errors';

export interface ICharacterRowInfo {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface ISearchBarProps {
  name: string;
  type?: string;
  placeholder?: string;
  className?: string;
  updateCharactersByName?: (name?: string) => Promise<void>;
}

export interface ICardSetProps<ICharacterRowInfo> {
  dataSet: ICharacterRowInfo[];
}

export interface ICardProps {
  id: string | number;
  name: string;
  status: string;
  origin: string;
  location: string;
  image: string;
}

export enum characterStatus {
  Alive = 'Alive',
  Dead = 'Dead',
  unknown = 'unknown',
}

export interface IFormProps {
  addNewCard?: (card: IFormsCardProps) => void;
}

export enum genderTypes {
  MALE = 'male',
  FEMALE = 'female',
}

export interface IFormsCardProps {
  id?: string;
  firstName: string;
  lastName: string;
  zipCode: string;
  birthday: string;
  arrivingDate: string;
  country: string;
  isAgreeToProcConfData: boolean;
  isAgreeToGetAdvToEmail: boolean;
  gender: genderTypes;
  profilePicture: string;
}

export interface IFormsCardSetProps {
  cardSetArray?: IFormsCardProps[];
}

export interface IInputWhole {
  name: string;
}

export interface IInputSelfField {
  id: string;
  label: string;
}

export interface IInputCheckable {
  defaultChecked: boolean;
}

export interface IInputUnderFormHook<TFormValues> extends IInputWhole {
  name: Path<TFormValues>;
  register: UseFormRegister<TFormValues>;
  rules?: RegisterOptions;
  errors?: FieldErrors<TFormValues>;
}

export interface ITextInputProps<TFormValues>
  extends IInputSelfField,
    IInputUnderFormHook<TFormValues> {}

export interface IDateInputProps<TFormValues>
  extends IInputSelfField,
    IInputUnderFormHook<TFormValues> {}

export interface IDropdownInputProps<TFormValues>
  extends IInputSelfField,
    IInputUnderFormHook<TFormValues> {
  options: string[];
}

export interface IFileUploadInputProps<TFormValues>
  extends IInputSelfField,
    IInputUnderFormHook<TFormValues> {}

export interface ICheckboxInputProps<TFormValues>
  extends IInputSelfField,
    IInputUnderFormHook<TFormValues> {}

export interface ISwitcherOptionProps extends IInputSelfField, IInputCheckable {}

export interface ISwitcherInputProps<TFormValues> extends IInputUnderFormHook<TFormValues> {
  options: ISwitcherOptionProps[];
}

export interface ISubmitInputProps extends IInputWhole {
  id: string;
  value: string;
  isDisabled: boolean;
}

export enum characterQueryGender {
  female = 'female',
  male = 'male',
  genderless = 'genderless',
  unknown = 'unknown',
}

export interface ICharacterQueryAttributes {
  name?: string;
  status?: characterStatus;
  species?: string;
  type?: string;
  gender?: characterQueryGender;
}

export interface IModalWindowProps {
  visible: boolean;
  setVisible: (newState: boolean) => void;
}

export interface ICardFullProps {
  character: ICharacterRowInfo;
}

export interface IButtonCustomProps {
  onClick?: (event: React.MouseEvent) => void;
  'data-testid'?: string;
}
