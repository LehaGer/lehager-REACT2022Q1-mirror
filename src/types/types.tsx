import * as React from 'react';
import { ElementType, MouseEventHandler } from 'react';

export interface CharacterRowInfo {
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

export interface SearchBarProps {
  name: string;
  type?: string;
  placeholder?: string;
  className?: string;
  marginBottom?: string;
}

export interface SearchBarState {
  searchRequest?: string;
}

export interface CardSetProps<CharacterRowInfo> {
  dataSet?: CharacterRowInfo[];
}

export interface CardSetState<CharacterRowInfo> {
  cards: CharacterRowInfo[];
}

export interface CardProps {
  id: number;
  name: string;
  status: string;
  origin: string;
  location: string;
  image: string;
}

export interface CardState {
  isFavorite: boolean;
  isHovered: boolean;
}

export enum characterStatusSet {
  Alive = 'Alive',
  Dead = 'Dead',
  unknown = 'unknown',
}

export interface ShareButtonProps {
  name?: string;
}

export interface ShareButtonState {
  anchorEl: null | Element | ((element: Element) => Element);
}

export interface FavouriteButtonProps {
  onClick: MouseEventHandler;
  isFavorite: boolean;
}

export interface PopoverShareBtnGroupProps {
  anchorEl: null | Element | ((element: Element) => Element);
  onClick: MouseEventHandler;
  onClose: MouseEventHandler;
}

export interface PopoverCustomProps {
  anchorEl: null | Element | ((element: Element) => Element);
  isOpen: boolean;
  onClick?: MouseEventHandler;
  onClose?: MouseEventHandler;
  arrowOffset?: string | number;
}
