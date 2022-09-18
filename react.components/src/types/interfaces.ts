import React from 'react';
import { UseFormRegister } from 'react-hook-form/dist/types/form';
import { FieldError, Path, RegisterOptions } from 'react-hook-form';
import { FieldErrors } from 'react-hook-form/dist/types/errors';
import { CARD_SET_STATUS } from '../store/reducers/characterCardsSlice';

export interface ICharacterNavigationInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface ICharacterInfo {
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
  name?: string | 'default-name';
  type?: string;
  placeholder?: string;
  className?: string;
  updateCharactersByName?: (attributes?: ICharacterQueryAttributes, page?: IPagination) => void;
}

export interface ICardSetProps<ICardInfo> {
  dataSet: ICardInfo[];
}

export interface ICardProps {
  id: string | number;
  name: string;
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

export interface IFormsState {
  firstName: {
    value: string;
    hasError?: FieldError;
  };
  lastName: {
    value: string;
    hasError?: FieldError;
  };
  zipCode: {
    value: string;
    hasError?: FieldError;
  };
  birthday: {
    value: string;
    hasError?: FieldError;
  };
  arrivingDate: {
    value: string;
    hasError?: FieldError;
  };
  country: {
    value: string;
    hasError?: FieldError;
  };
  isAgreeToProcConfData: {
    value: boolean;
    hasError?: FieldError;
  };
  isAgreeToGetAdvToEmail: {
    value: boolean;
    hasError?: FieldError;
  };
  gender: {
    value: genderTypes | null;
    hasError?: FieldError;
  };
  profilePicture: {
    value: FileList | null;
    hasError?: FieldError;
  };
  isSubmitButtonDisabled: boolean;
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
  register?: UseFormRegister<TFormValues>;
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
  onClose: () => void;
}

export interface ICardFullProps {
  character?: ICharacterInfo;
}

export interface IButtonCustomProps {
  onClick?: (event: React.MouseEvent) => void;
  'data-testid'?: string;
}

export interface ICharacterContext {
  searchBarValue: string;
  cards: ICharacterInfo[];
}

export interface IFormContext {
  formsFields: IFormsState;
  cards: IFormsCardProps[];
}

export interface IInitialState {
  characterQuery: string;
  characterCards: ICharacterInfo[];
  formFields: IFormsState;
  formCards: IFormsCardProps[];
  cardFilter: ICardFilter;
  pagination: IPagination;
}

export interface ICardFilter {
  status?: characterStatus;
  gender?: characterQueryGender;
  species?: string;
}

export interface IPagination {
  pageCapacity: number;
  pagesCount?: number;
  currentPage: number;
  navigationInfo?: ICharacterNavigationInfo;
}

export interface ICardsSet {
  data: ICharacterInfo[];
  status: CARD_SET_STATUS;
  error: string | null;
}

export interface IDBResponse {
  info: ICharacterNavigationInfo;
  results: ICharacterInfo[];
}
