import React, { MouseEventHandler } from 'react';

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
  updateCharactersByName: (name?: string) => void;
}

export interface ISearchBarState {
  searchRequest: string;
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
  isFullCardOpened: boolean;
  isFullCardLoading: boolean;
  characterFullInfo: ICharacterInfo | null;
}

export enum characterStatus {
  Alive = 'Alive',
  Dead = 'Dead',
  unknown = 'unknown',
}

export interface IShareButtonProps {
  name?: string;
}

export interface IFavouriteButtonProps {
  onClick?: MouseEventHandler;
  isFavorite?: boolean;
}

export interface IFormProps {
  addNewCard?: (card: IFormsCardProps) => void;
}

export interface IFormState {
  isFirstNameCorrect: boolean;
  isLastNameCorrect: boolean;
  isZipCodeCorrect: boolean;
  isBirthdayCorrect: boolean;
  isArrivingDateCorrect: boolean;
  isCountryCorrect: boolean;
  isAgreementToProcConfDataCorrect: boolean;
  isAgreementToGetAdvToEmail: boolean;
  isGenderCorrect: boolean;
  isProfilePictureCorrect: boolean;
  isSubmitButtonDisabled: boolean;
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
  name?: string;
  cardSetArray?: IFormsCardProps[];
}

export interface IInputWhole {
  name: string;
}

export interface IInputSelfField {
  id: string;
  label: string;
}

export interface IInputVerifiable {
  formatInstruction: string;
  isCorrectFormat: boolean;
  onChange: (a: React.ChangeEvent) => void;
}

export interface IInputCheckable {
  defaultChecked: boolean;
}

export interface IInputValueable {
  defaultValue: string;
}

export interface ITextInputProps
  extends IInputWhole,
    IInputSelfField,
    IInputVerifiable,
    IInputValueable {}

export interface IDateInputProps
  extends IInputWhole,
    IInputSelfField,
    IInputVerifiable,
    IInputValueable {}

export interface IDropdownInputProps
  extends IInputWhole,
    IInputSelfField,
    IInputVerifiable,
    IInputValueable {
  options: string[];
}

export interface IFileUploadInputProps
  extends IInputWhole,
    IInputSelfField,
    IInputVerifiable,
    IInputValueable {}

export interface ICheckboxInputProps
  extends IInputWhole,
    IInputSelfField,
    IInputVerifiable,
    IInputCheckable {}

export interface ISwitcherOptionProps extends IInputSelfField, IInputCheckable {}

export interface ISwitcherInputProps extends IInputWhole, IInputVerifiable {
  options: ISwitcherOptionProps[];
}

export interface ISubmitInputProps extends IInputWhole {
  id: string;
  value: string;
  isDisabled: boolean;
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

export interface IMainState {
  dataSet: ICharacterInfo[];
  isDataLoading: boolean;
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

export interface IAppProps {
  name?: string;
}

export interface IAppState {
  isLoading: boolean;
}

export interface IModalWindowProps {
  visible: boolean;
  setVisible: (newState: boolean) => void;
}

export interface ICardFullProps {
  character: ICharacterInfo | null;
}

export interface IAppRouter {
  name?: string;
}

export interface IButtonCustom {
  name?: string;
  onClick?: (event: React.MouseEvent) => void;
  'data-testid'?: string;
}

export interface IFavouriteButton {
  isLiked: boolean;
}
