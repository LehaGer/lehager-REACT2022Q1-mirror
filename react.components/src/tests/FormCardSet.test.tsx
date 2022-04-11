import React from 'react';
import { render, screen } from '@testing-library/react';
import MockDataSet from './data/formCardsData';
import FormsCardSet from '../components/FormsCardSet/FormsCardSet';
import FormsPage from '../pages/Forms/FormsPage';
import userEvent from '@testing-library/user-event/dist';
import createShiftedDate from './functions/createShiftedDate';

describe('FormsCardSet testing', () => {
  test('does FormsCardSet correspond to cards count', async () => {
    render(<FormsCardSet cardSetArray={MockDataSet} />);
    const cards = await screen.findAllByTestId('FormsCard');
    expect(cards.length).toBe(5);
    cards.forEach((el) => {
      expect(el).toBeInTheDocument();
    });
  });

  test('does FormsCardSet create new card from form', async () => {
    global.URL.createObjectURL = jest.fn(() => 'details');
    global.window.alert = jest.fn();

    render(<FormsPage />);

    const cards = await screen.queryAllByTestId('FormsCard');
    expect(cards.length).toBe(0);

    const firstNameInput = screen.getByLabelText('First Name:');
    const lastNameInput = screen.getByLabelText('Last Name:');
    const zipCodeInput = screen.getByLabelText('Zip-code:');
    const birthdayInput = screen.getByLabelText('birthday:');
    const arrivingDateInput = screen.getByLabelText('arriving date:');
    const countryInput = screen.getByLabelText('country:');
    const profilePictureInput = screen.getByLabelText('profile picture:');
    const agreeToProcessingMyDataInput = screen.getByLabelText('- agree to processing my data');
    const agreeReceiveAdvertisementInput = screen.getByLabelText('- receive advertisement');
    const switcherMaleOptionInput = screen.getByLabelText('- Male');
    const submitInput = screen.getByTestId('SubmitInput');

    userEvent.type(firstNameInput, 'Firstname');
    userEvent.type(lastNameInput, 'Lastname');
    userEvent.type(zipCodeInput, '12345-1234');
    userEvent.type(birthdayInput, createShiftedDate(-1));
    userEvent.type(arrivingDateInput, createShiftedDate(1));
    userEvent.selectOptions(countryInput, 'Belarus');
    const file = new File(['hello'], 'hello.png', { type: 'image/png' });
    userEvent.upload(profilePictureInput, file);
    userEvent.click(agreeToProcessingMyDataInput);
    userEvent.click(agreeReceiveAdvertisementInput);
    userEvent.click(switcherMaleOptionInput);
    userEvent.click(submitInput);

    const newCards = await screen.findAllByTestId('FormsCard');
    expect(global.window.alert).toBeCalledTimes(1);
    expect(newCards.length).toBe(1);
  });
});
