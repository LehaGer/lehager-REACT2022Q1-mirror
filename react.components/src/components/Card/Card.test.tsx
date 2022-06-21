import React from 'react';
import { render, screen } from '@testing-library/react';
import axios, { AxiosResponse } from 'axios';
import MockDataSet from '../../tests/data/cardsData';
import { ICharacterInfo } from '../../types/interfaces';
import Card from './Card';
import userEvent from '@testing-library/user-event/dist';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Card testing', () => {
  let response: ICharacterInfo[];
  let mockedResponseCardFull: AxiosResponse;
  beforeEach(() => {
    response = MockDataSet;
    mockedResponseCardFull = {
      data: response[0],
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {},
    };
  });

  test('does Card open ModalWindow', async () => {
    render(
      <Card
        key={response[0].id}
        id={response[0].id}
        name={response[0].name}
        status={response[0].status}
        origin={response[0].origin.name}
        location={response[0].location.name}
        image={response[0].image}
      />
    );
    expect(screen.queryByTestId('ModalWindow')).not.toHaveClass('active');
    userEvent.click(screen.getByTestId('learnMore'));
    expect(await screen.findByTestId('ModalWindow')).toHaveClass('active');
  });

  test('does Card show Loader in ModalWindow', async () => {
    render(
      <Card
        key={response[0].id}
        id={response[0].id}
        name={response[0].name}
        status={response[0].status}
        origin={response[0].origin.name}
        location={response[0].location.name}
        image={response[0].image}
      />
    );
    expect(screen.queryByTestId('Loader')).not.toBeInTheDocument();
    userEvent.click(screen.getByTestId('learnMore'));
    expect(screen.getByTestId('Loader')).toBeInTheDocument();

    expect(await screen.findByTestId('Loader')).not.toBeInTheDocument();
  });

  test('does Card open FullCard', async () => {
    render(
      <Card
        key={response[0].id}
        id={response[0].id}
        name={response[0].name}
        status={response[0].status}
        origin={response[0].origin.name}
        location={response[0].location.name}
        image={response[0].image}
      />
    );
    expect(screen.queryByTestId('CardFull')).not.toBeInTheDocument();
    userEvent.click(screen.getByTestId('learnMore'));
    mockedAxios.get.mockResolvedValue(mockedResponseCardFull);
    expect(await screen.findByTestId('CardFull')).toBeInTheDocument();
    expect(await screen.findByTestId('CardFullName')).toHaveTextContent(
      String(screen.getByTestId('CardName').textContent)
    );
  });

  test('does Card handle request error for CardFullModal', async () => {
    render(
      <Card
        key={response[0].id}
        id={response[0].id}
        name={response[0].name}
        status={response[0].status}
        origin={response[0].origin.name}
        location={response[0].location.name}
        image={response[0].image}
      />
    );
    expect(screen.queryByTestId('CardNotFoundMsg')).not.toBeInTheDocument();
    userEvent.click(screen.getByTestId('learnMore'));
    mockedAxios.get.mockResolvedValue(null);
    expect(await screen.findByTestId('CardNotFoundMsg')).toBeInTheDocument();
  });
});
