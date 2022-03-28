import React from 'react';
import { render, screen } from '@testing-library/react';
import CardSet from '../components/UI/CardSet/CardSet';
import axios, { AxiosResponse } from 'axios';
import MockDataSet from '../DataFromDB/MockDataSet';
import { CharacterRowInfo } from '../types/types';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('CardSet testing', () => {
  let response: CharacterRowInfo[];
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

  test('is CardSet corresponds to cards count', async () => {
    mockedAxios.get.mockResolvedValue(mockedResponse);
    expect(axios.get).not.toHaveBeenCalled();
    render(<CardSet />);
    expect(axios.get).toHaveBeenCalled();
    const cards = await screen.findAllByTestId('Card');
    expect(cards.length).toBe(20);
  });
});
