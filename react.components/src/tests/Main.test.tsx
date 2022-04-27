import React from 'react';
import { render, screen } from '@testing-library/react';
import axios, { AxiosResponse } from 'axios';
import MockDataSet from './data/cardsData';
import { ICharacterRowInfo } from '../types/interfaces';
import userEvent from '@testing-library/user-event/dist';
import Main from '../pages/Main/Main';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Main testing', () => {
  let response: ICharacterRowInfo[];
  let mockedResponse: AxiosResponse;
  let mockedResponseSearchByName: AxiosResponse;
  beforeEach(() => {
    response = MockDataSet;
    mockedResponse = {
      data: { results: response },
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {},
    };
    mockedResponseSearchByName = {
      data: { results: [response[0]] },
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {},
    };
  });

  test('does Main show Loader of CardSet', async () => {
    render(<Main />);
    expect(screen.queryByTestId('CardSet')).not.toBeInTheDocument();
    expect(screen.queryByTestId('Loader')).toBeInTheDocument();

    expect(await screen.findByTestId('Loader')).not.toBeInTheDocument();
  });

  test('does Main hide Loader of CardSet', async () => {
    mockedAxios.get.mockResolvedValue(mockedResponse);
    render(<Main />);
    expect(await screen.findByTestId('Loader')).not.toBeInTheDocument();
    expect(await screen.findByTestId('CardSet')).toBeInTheDocument();
  });

  test('does Main show cards', async () => {
    mockedAxios.get.mockResolvedValue(mockedResponse);
    render(<Main />);
    expect(await screen.findByTestId('CardSet')).toBeInTheDocument();
    const cards = await screen.findAllByTestId('Card');
    expect(cards.length).toBe(7);
  });

  test('does Main update cards', async () => {
    mockedAxios.get.mockResolvedValue(mockedResponse);
    render(<Main />);
    expect(await screen.findByTestId('CardSet')).toBeInTheDocument();
    let cards = await screen.findAllByTestId('Card');
    expect(cards.length).toBe(7);

    userEvent.type(await screen.findByTestId('searchBar'), 'Rick Sanchez{enter}');

    mockedAxios.get.mockResolvedValue(mockedResponseSearchByName);

    cards = await screen.findAllByTestId('Card');
    expect(cards.length).toBe(1);
    expect(screen.getByTestId('CardName')).toHaveTextContent('Rick Sanchez');
  });

  test('does Main show error msg', async () => {
    mockedAxios.get.mockResolvedValue(null);
    render(<Main />);
    expect(await screen.findByTestId('MainNotFoundMsg')).toBeInTheDocument();
  });
});
