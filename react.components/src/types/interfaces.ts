import { MouseEventHandler, RefObject } from 'react';

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
}

export interface ISearchBarState {
  searchRequest?: string;
}

export interface ICardSetProps<ICharacterRowInfo> {
  dataSet?: ICharacterRowInfo[];
}

export interface ICardSetState<ICharacterRowInfo> {
  cards: ICharacterRowInfo[];
}

export interface ICardProps {
  id: string | number;
  name: string;
  status: string;
  origin: string;
  location: string;
  image: string;
}

export interface ICardState {
  isFavorite: boolean;
  isHovered: boolean;
}

export enum characterStatusSet {
  Alive = 'Alive',
  Dead = 'Dead',
  unknown = 'unknown',
}

export interface IShareButtonProps {
  name?: string;
}

export interface IShareButtonState {
  anchorEl: null | Element | ((element: Element) => Element);
}

export interface IFavouriteButtonProps {
  onClick?: MouseEventHandler;
  isFavorite?: boolean;
}

export interface IPopoverShareBtnGroupProps {
  anchorEl: null | Element | ((element: Element) => Element);
  onClick: MouseEventHandler;
  onClose: MouseEventHandler;
}

export interface IPopoverCustomProps {
  anchorEl: null | Element | ((element: Element) => Element);
  isOpen: boolean;
  onClick?: MouseEventHandler;
  onClose?: MouseEventHandler;
  arrowOffset?: string | number;
}

export interface IFormProps {
  name?: string;
  addNewCard: (card: IFormsCardProps) => void;
}

export interface IFormState {
  name?: string;
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

export interface IFormsCardState {
  name?: string;
}

export interface IFormsCardSetProps {
  name?: string;
  cardSetArray?: IFormsCardProps[];
}

export interface IFormsCardSetState {
  name?: string;
}

export interface ISwitcherOption {
  id: string;
  label: string;
  defaultChecked: boolean | false;
}

export interface ISwitcherInput {
  name: string;
  formatInstruction: string;
  isCorrectFormat: boolean | true;
  options: ISwitcherOption[];
}

export interface ISubmitInput {
  value: string;
}

export interface IFileUploadInput {
  id: string;
  name: string;
  defaultValue: string;
  reference: RefObject<HTMLInputElement>;
  formatInstruction: string;
  isCorrectFormat: boolean | true;
  label: string;
}

export interface IDropdownInput {
  id: string;
  name: string;
  defaultValue: string | '';
  reference: RefObject<HTMLSelectElement>;
  formatInstruction: string;
  isCorrectFormat: boolean | true;
  label: string;
  options: string[];
}

export interface IDateInput {
  id: string;
  name: string;
  defaultValue: string | '';
  reference: RefObject<HTMLInputElement>;
  formatInstruction: string;
  isCorrectFormat: boolean | true;
  label: string;
}

export interface ICheckboxInput {
  id: string;
  name: string;
  defaultChecked: boolean | false;
  reference: RefObject<HTMLInputElement>;
  formatInstruction: string;
  isCorrectFormat: boolean | true;
  label: string;
}
