import { MouseEventHandler } from 'react';

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
  style?: {};
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
  id: number;
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
