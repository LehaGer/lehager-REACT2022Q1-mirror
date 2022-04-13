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
  updateCardSet: (serverResponse: ICharacterRowInfo[]) => void;
}

export interface ISearchBarState {
  searchRequest?: string;
}

export interface ICardSetProps<ICharacterRowInfo> {
  dataSet: ICharacterRowInfo[];
}

export interface ICardSetState<ICharacterRowInfo> {
  cards?: ICharacterRowInfo[];
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
  isOpened: boolean;
}

export enum characterStatus {
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
  addNewCard?: (card: IFormsCardProps) => void;
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

export interface ISwitcherOptionProps {
  id: string;
  label: string;
  defaultChecked: boolean | false;
}

export interface ISwitcherInputProps {
  name: string;
  formatInstruction: string;
  isCorrectFormat: boolean | true;
  options: ISwitcherOptionProps[];
  onChange: (a: React.ChangeEvent) => void;
}

export interface ISubmitInput {
  value: string;
  reference: RefObject<HTMLInputElement>;
}

export interface IFileUploadInputProps {
  id: string;
  name: string;
  defaultValue: string;
  formatInstruction: string;
  isCorrectFormat: boolean | true;
  label: string;
  onChange: (a: React.ChangeEvent) => void;
}

export interface IDropdownInputProps {
  id: string;
  name: string;
  defaultValue: string | '';
  formatInstruction: string;
  isCorrectFormat: boolean | true;
  label: string;
  options: string[];
  onChange: (a: React.ChangeEvent) => void;
}

export interface IDateInputProps {
  id: string;
  name: string;
  defaultValue: string | '';
  formatInstruction: string;
  isCorrectFormat: boolean | true;
  label: string;
  onChange: (a: React.ChangeEvent) => void;
}

export interface ICheckboxInputProps {
  id: string;
  name: string;
  defaultChecked: boolean | false;
  formatInstruction: string;
  isCorrectFormat: boolean | true;
  label: string;
  onChange: (a: React.ChangeEvent) => void;
}

export interface ITextInputProps {
  id: string;
  name: string;
  defaultValue: string | '';
  formatInstruction: string;
  isCorrectFormat: boolean | true;
  label: string;
  onChange: (a: React.ChangeEvent) => void;
}

export interface IFormsPageProps {
  name?: string;
}

export interface IFormsPageState {
  cardSet: IFormsCardProps[];
}

export interface IMainProps {
  name?: string;
}

export interface IMainState<ICharacterRowInfo> {
  dataSet: ICharacterRowInfo[];
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
