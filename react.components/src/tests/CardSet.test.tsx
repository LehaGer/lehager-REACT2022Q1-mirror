import React from 'react';
import { render, screen } from '@testing-library/react';
import CardSet from '../components/CardSet/CardSet';
import axios, { AxiosResponse } from 'axios';
import MockDataSet from '../data/cardsData';
import { ICharacterRowInfo } from '../types/interfaces';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('CardSet testing', () => {
  let response: ICharacterRowInfo[];
  let mockedResponse: AxiosResponse;
  beforeEach(() => {
    response = MockDataSet;
    mockedResponse = {
      data: { results: response },
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {},
    };
  });

  test('does CardSet correspond to cards count', async () => {
    mockedAxios.get.mockResolvedValue(mockedResponse);
    expect(axios.get).not.toHaveBeenCalled();
    render(<CardSet />);
    expect(axios.get).toHaveBeenCalled();
    const cards = await screen.findAllByTestId('Card');
    expect(cards.length).toBe(7);
  });
});
