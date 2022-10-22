import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event/dist';
import ModalWindow from './ModalWindow';
import Card from '../../Card/Card';
import MockDataSet from '../../../tests/data/cardsData';
import { ICharacterInfo } from '../../../types/interfaces';

jest.mock('axios');

describe('ModalWindow testing', () => {
  let response: ICharacterInfo[];
  beforeEach(() => {
    response = MockDataSet;
  });

  test('does ModalWindow contains corresponding class', async () => {
    const { unmount } = render(<ModalWindow visible={true} setVisible={() => {}} />);
    expect(screen.getByTestId('ModalWindow')).toHaveClass('active');
    unmount();
    render(<ModalWindow visible={false} setVisible={() => {}} />);
    expect(screen.queryByTestId('ModalWindow')).not.toHaveClass('active');
  });

  test('does ModalWindow contains children', async () => {
    render(
      <ModalWindow visible={true} setVisible={() => {}}>
        <div data-testid="testingChildElement" />
      </ModalWindow>
    );
    expect(screen.getByTestId('testingChildElement')).toBeInTheDocument();
  });

  test('does ModalWindow handle click outside', async () => {
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
    userEvent.click(screen.getByTestId('learnMore'));
    expect(await screen.findByTestId('ModalWindow')).toHaveClass('active');
    userEvent.click(screen.getByTestId('ModalWindow'));
    expect(await screen.findByTestId('ModalWindow')).not.toHaveClass('active');
  });

  test('does ModalWindow handle click closeBtn', async () => {
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
    userEvent.click(screen.getByTestId('learnMore'));
    expect(await screen.findByTestId('ModalWindow')).toHaveClass('active');
    userEvent.click(screen.getByTestId('ModalWindowCloseBtn'));
    expect(await screen.findByTestId('ModalWindow')).not.toHaveClass('active');
  });
});
