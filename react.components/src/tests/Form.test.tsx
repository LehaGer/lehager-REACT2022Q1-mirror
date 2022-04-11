import React from 'react';
import { render, screen } from '@testing-library/react';
import Form from '../components/Form/Form';
import userEvent from '@testing-library/user-event/dist';
import createShiftedDate from './functions/createShiftedDate';

describe('Form testing', () => {
  test('does Form have all required elements', () => {
    render(<Form />);

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
    const switcherFemaleOptionInput = screen.getByLabelText('- Female');
    const submitInput = screen.getByTestId('SubmitInput');

    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(zipCodeInput).toBeInTheDocument();
    expect(birthdayInput).toBeInTheDocument();
    expect(arrivingDateInput).toBeInTheDocument();
    expect(countryInput).toBeInTheDocument();
    expect(profilePictureInput).toBeInTheDocument();
    expect(agreeToProcessingMyDataInput).toBeInTheDocument();
    expect(agreeReceiveAdvertisementInput).toBeInTheDocument();
    expect(switcherMaleOptionInput).toBeInTheDocument();
    expect(switcherFemaleOptionInput).toBeInTheDocument();
    expect(submitInput).toBeInTheDocument();
  });

  test('does Submit input have correct initial state', () => {
    render(<Form />);
    const submitInput = screen.getByTestId('SubmitInput');
    expect(submitInput).toBeDisabled();
  });

  describe('does Submit input change state on entering something to form', () => {
    describe('initial case', () => {
      test('on inputting at firstName', () => {
        render(<Form />);
        const firstNameInput = screen.getByLabelText('First Name:');
        const submitInput = screen.getByTestId('SubmitInput');
        expect(submitInput).toBeDisabled();
        userEvent.type(firstNameInput, 'some random text');
        expect(submitInput).not.toBeDisabled();
      });

      test('on inputting at lastName', () => {
        render(<Form />);
        const lastNameInput = screen.getByLabelText('Last Name:');
        const submitInput = screen.getByTestId('SubmitInput');
        expect(submitInput).toBeDisabled();
        userEvent.type(lastNameInput, 'some random text');
        expect(submitInput).not.toBeDisabled();
      });

      test('on inputting at zipCode', () => {
        render(<Form />);
        const zipCodeInput = screen.getByLabelText('Zip-code:');
        const submitInput = screen.getByTestId('SubmitInput');
        expect(submitInput).toBeDisabled();
        userEvent.type(zipCodeInput, 'some random text');
        expect(submitInput).not.toBeDisabled();
      });

      test('on inputting at birthday', () => {
        render(<Form />);
        const birthdayInput = screen.getByLabelText('birthday:');
        const submitInput = screen.getByTestId('SubmitInput');
        expect(submitInput).toBeDisabled();
        userEvent.type(birthdayInput, '2020-05-16');
        expect(submitInput).not.toBeDisabled();
      });

      test('on inputting at arrivingDate', () => {
        render(<Form />);
        const arrivingDateInput = screen.getByLabelText('arriving date:');
        const submitInput = screen.getByTestId('SubmitInput');
        expect(submitInput).toBeDisabled();
        userEvent.type(arrivingDateInput, '2020-05-16');
        expect(submitInput).not.toBeDisabled();
      });

      test('on inputting at country', () => {
        render(<Form />);
        const countryInput = screen.getByLabelText('country:');
        const submitInput = screen.getByTestId('SubmitInput');
        expect(submitInput).toBeDisabled();
        userEvent.selectOptions(countryInput, 'Belarus');
        expect(submitInput).not.toBeDisabled();
      });

      test('on inputting at profilePicture', () => {
        render(<Form />);
        const profilePictureInput = screen.getByLabelText('profile picture:');
        const file = new File(['hello'], 'hello.png', { type: 'image/png' });
        const submitInput = screen.getByTestId('SubmitInput');
        expect(submitInput).toBeDisabled();
        userEvent.upload(profilePictureInput, file);
        expect(submitInput).not.toBeDisabled();
      });

      test('on inputting at agreeToProcessingMyData', () => {
        render(<Form />);
        const agreeToProcessingMyDataInput = screen.getByLabelText('- agree to processing my data');
        const submitInput = screen.getByTestId('SubmitInput');
        expect(submitInput).toBeDisabled();
        userEvent.click(agreeToProcessingMyDataInput);
        expect(submitInput).not.toBeDisabled();
      });

      test('on inputting at agreeReceiveAdvertisement', () => {
        render(<Form />);
        const agreeReceiveAdvertisementInput = screen.getByLabelText('- receive advertisement');
        const submitInput = screen.getByTestId('SubmitInput');
        expect(submitInput).toBeDisabled();
        userEvent.click(agreeReceiveAdvertisementInput);
        expect(submitInput).not.toBeDisabled();
      });

      test('on inputting at switcherMaleOption', () => {
        render(<Form />);
        const switcherMaleOptionInput = screen.getByLabelText('- Male');
        const submitInput = screen.getByTestId('SubmitInput');
        expect(submitInput).toBeDisabled();
        userEvent.click(switcherMaleOptionInput);
        expect(submitInput).not.toBeDisabled();
      });

      test('on inputting at switcherFemaleOption', () => {
        render(<Form />);
        const switcherFemaleOptionInput = screen.getByLabelText('- Female');
        const submitInput = screen.getByTestId('SubmitInput');
        expect(submitInput).toBeDisabled();
        userEvent.click(switcherFemaleOptionInput);
        expect(submitInput).not.toBeDisabled();
      });
    });
  });

  describe('does Errors showed correctly', () => {
    global.URL.createObjectURL = jest.fn(() => 'details');

    describe('on firstName', () => {
      test('entering right', () => {
        render(<Form />);

        const firstNameInput = screen.getByLabelText('First Name:');
        const firstNameErrorMsg = screen.getByText(
          'ur name must include letters only & be > 0 symbols'
        );
        const submitInput = screen.getByTestId('SubmitInput');

        expect(firstNameErrorMsg).not.toHaveClass('showed');
        userEvent.type(firstNameInput, 'CorrectFirstname');
        expect(firstNameErrorMsg).not.toHaveClass('showed');
        userEvent.click(submitInput);
        expect(firstNameErrorMsg).not.toHaveClass('showed');
      });
      test('entering wrong', () => {
        render(<Form />);

        const firstNameInput = screen.getByLabelText('First Name:');
        const firstNameErrorMsg = screen.getByText(
          'ur name must include letters only & be > 0 symbols'
        );
        const submitInput = screen.getByTestId('SubmitInput');

        expect(firstNameErrorMsg).not.toHaveClass('showed');
        userEvent.type(firstNameInput, 'IncorrectFirstname123');
        expect(firstNameErrorMsg).not.toHaveClass('showed');
        userEvent.click(submitInput);
        expect(firstNameErrorMsg).toHaveClass('showed');
      });
      test('correcting', () => {
        render(<Form />);

        const firstNameInput = screen.getByLabelText('First Name:');
        const firstNameErrorMsg = screen.getByText(
          'ur name must include letters only & be > 0 symbols'
        );
        const submitInput = screen.getByTestId('SubmitInput');

        userEvent.type(firstNameInput, 'IncorrectFirstname123');
        userEvent.click(submitInput);
        expect(firstNameErrorMsg).toHaveClass('showed');
        userEvent.clear(firstNameInput);
        expect(firstNameErrorMsg).not.toHaveClass('showed');
      });
    });
    describe('on lastName', () => {
      test('entering right', () => {
        render(<Form />);

        const lastNameInput = screen.getByLabelText('Last Name:');
        const lastNameErrorMsg = screen.getByText(
          'ur surname must include letters only & be > 0 symbols'
        );
        const submitInput = screen.getByTestId('SubmitInput');

        expect(lastNameErrorMsg).not.toHaveClass('showed');
        userEvent.type(lastNameInput, 'CorrectLastname');
        expect(lastNameErrorMsg).not.toHaveClass('showed');
        userEvent.click(submitInput);
        expect(lastNameErrorMsg).not.toHaveClass('showed');
      });
      test('entering wrong', () => {
        render(<Form />);

        const lastNameInput = screen.getByLabelText('Last Name:');
        const lastNameErrorMsg = screen.getByText(
          'ur surname must include letters only & be > 0 symbols'
        );
        const submitInput = screen.getByTestId('SubmitInput');

        expect(lastNameErrorMsg).not.toHaveClass('showed');
        userEvent.type(lastNameInput, 'IncorrectLastname123');
        expect(lastNameErrorMsg).not.toHaveClass('showed');
        userEvent.click(submitInput);
        expect(lastNameErrorMsg).toHaveClass('showed');
      });
      test('correcting', () => {
        render(<Form />);

        const lastNameInput = screen.getByLabelText('Last Name:');
        const lastNameErrorMsg = screen.getByText(
          'ur surname must include letters only & be > 0 symbols'
        );
        const submitInput = screen.getByTestId('SubmitInput');

        userEvent.type(lastNameInput, 'IncorrectLastname123');
        userEvent.click(submitInput);
        expect(lastNameErrorMsg).toHaveClass('showed');
        userEvent.clear(lastNameInput);
        expect(lastNameErrorMsg).not.toHaveClass('showed');
      });
    });
    describe('on zipCode', () => {
      test('entering right', () => {
        render(<Form />);

        const zipCodeInput = screen.getByLabelText('Zip-code:');
        const zipCodeErrorMsg = screen.getByText(
          'ur zip-code must correspond to format "XXXXX-YYYY"'
        );
        const submitInput = screen.getByTestId('SubmitInput');

        expect(zipCodeErrorMsg).not.toHaveClass('showed');
        userEvent.type(zipCodeInput, '12345-1234');
        expect(zipCodeErrorMsg).not.toHaveClass('showed');
        userEvent.click(submitInput);
        expect(zipCodeErrorMsg).not.toHaveClass('showed');
      });
      test('entering wrong', () => {
        render(<Form />);

        const zipCodeInput = screen.getByLabelText('Zip-code:');
        const zipCodeErrorMsg = screen.getByText(
          'ur zip-code must correspond to format "XXXXX-YYYY"'
        );
        const submitInput = screen.getByTestId('SubmitInput');

        expect(zipCodeErrorMsg).not.toHaveClass('showed');
        userEvent.type(zipCodeInput, '12345-12345');
        expect(zipCodeErrorMsg).not.toHaveClass('showed');
        userEvent.click(submitInput);
        expect(zipCodeErrorMsg).toHaveClass('showed');
      });
      test('correcting', () => {
        render(<Form />);

        const zipCodeInput = screen.getByLabelText('Zip-code:');
        const zipCodeErrorMsg = screen.getByText(
          'ur zip-code must correspond to format "XXXXX-YYYY"'
        );
        const submitInput = screen.getByTestId('SubmitInput');

        userEvent.type(zipCodeInput, '12345-12345');
        userEvent.click(submitInput);
        expect(zipCodeErrorMsg).toHaveClass('showed');
        userEvent.clear(zipCodeInput);
        expect(zipCodeErrorMsg).not.toHaveClass('showed');
      });
    });
    describe('on birthday', () => {
      test('entering right', () => {
        render(<Form />);

        const birthdayInput = screen.getByLabelText('birthday:');
        const birthdayErrorMsg = screen.getByText('select date < NOW');
        const submitInput = screen.getByTestId('SubmitInput');

        expect(birthdayErrorMsg).not.toHaveClass('showed');
        userEvent.type(birthdayInput, createShiftedDate(-1));
        expect(birthdayErrorMsg).not.toHaveClass('showed');
        userEvent.click(submitInput);
        expect(birthdayErrorMsg).not.toHaveClass('showed');
      });
      test('entering wrong', () => {
        render(<Form />);

        const birthdayInput = screen.getByLabelText('birthday:');
        const birthdayErrorMsg = screen.getByText('select date < NOW');
        const submitInput = screen.getByTestId('SubmitInput');

        expect(birthdayErrorMsg).not.toHaveClass('showed');
        userEvent.type(birthdayInput, createShiftedDate(1));
        expect(birthdayErrorMsg).not.toHaveClass('showed');
        userEvent.click(submitInput);
        expect(birthdayErrorMsg).toHaveClass('showed');
      });
      test('correcting', () => {
        render(<Form />);

        const birthdayInput = screen.getByLabelText('birthday:');
        const birthdayErrorMsg = screen.getByText('select date < NOW');
        const submitInput = screen.getByTestId('SubmitInput');

        userEvent.type(birthdayInput, createShiftedDate(1));
        userEvent.click(submitInput);
        expect(birthdayErrorMsg).toHaveClass('showed');
        userEvent.clear(birthdayInput);
        expect(birthdayErrorMsg).not.toHaveClass('showed');
      });
    });
    describe('on arrivingDate', () => {
      test('entering right', () => {
        render(<Form />);

        const arrivingDateInput = screen.getByLabelText('arriving date:');
        const arrivingDateErrorMsg = screen.getByText('select date > NOW');
        const submitInput = screen.getByTestId('SubmitInput');

        expect(arrivingDateErrorMsg).not.toHaveClass('showed');
        userEvent.type(arrivingDateInput, createShiftedDate(1));
        expect(arrivingDateErrorMsg).not.toHaveClass('showed');
        userEvent.click(submitInput);
        expect(arrivingDateErrorMsg).not.toHaveClass('showed');
      });
      test('entering wrong', () => {
        render(<Form />);

        const arrivingDateInput = screen.getByLabelText('arriving date:');
        const arrivingDateErrorMsg = screen.getByText('select date > NOW');
        const submitInput = screen.getByTestId('SubmitInput');

        expect(arrivingDateErrorMsg).not.toHaveClass('showed');
        userEvent.type(arrivingDateInput, createShiftedDate(-1));
        expect(arrivingDateErrorMsg).not.toHaveClass('showed');
        userEvent.click(submitInput);
        expect(arrivingDateErrorMsg).toHaveClass('showed');
      });
      test('correcting', () => {
        render(<Form />);

        const arrivingDateInput = screen.getByLabelText('arriving date:');
        const arrivingDateErrorMsg = screen.getByText('select date > NOW');
        const submitInput = screen.getByTestId('SubmitInput');

        userEvent.type(arrivingDateInput, createShiftedDate(-1));
        userEvent.click(submitInput);
        expect(arrivingDateErrorMsg).toHaveClass('showed');
        userEvent.clear(arrivingDateInput);
        expect(arrivingDateErrorMsg).not.toHaveClass('showed');
      });
    });
    describe('on country', () => {
      test('entering right', () => {
        render(<Form />);

        const countryInput = screen.getByLabelText('country:');
        const countryErrorMsg = screen.getByText('u must pick some country');
        const submitInput = screen.getByTestId('SubmitInput');

        expect(countryErrorMsg).not.toHaveClass('showed');
        userEvent.selectOptions(countryInput, 'Belarus');
        expect(countryErrorMsg).not.toHaveClass('showed');
        userEvent.click(submitInput);
        expect(countryErrorMsg).not.toHaveClass('showed');
      });
      test('entering wrong', () => {
        render(<Form />);

        const countryInput = screen.getByLabelText('country:');
        const countryErrorMsg = screen.getByText('u must pick some country');
        const submitInput = screen.getByTestId('SubmitInput');

        expect(countryErrorMsg).not.toHaveClass('showed');
        userEvent.selectOptions(countryInput, '');
        expect(countryErrorMsg).not.toHaveClass('showed');
        userEvent.click(submitInput);
        expect(countryErrorMsg).toHaveClass('showed');
      });
      test('correcting', () => {
        render(<Form />);

        const countryInput = screen.getByLabelText('country:');
        const countryErrorMsg = screen.getByText('u must pick some country');
        const submitInput = screen.getByTestId('SubmitInput');

        userEvent.selectOptions(countryInput, '');
        userEvent.click(submitInput);
        expect(countryErrorMsg).toHaveClass('showed');
        userEvent.selectOptions(countryInput, 'Belarus');
        expect(countryErrorMsg).not.toHaveClass('showed');
      });
    });
    describe('on profilePicture', () => {
      test('entering right', async () => {
        render(<Form />);

        const profilePictureInput = screen.getByLabelText('profile picture:');
        const profilePictureErrorMsg = screen.getByText('pick correct img');
        const submitInput = screen.getByTestId('SubmitInput');
        const file = new File(['hello'], 'hello.png', { type: 'image/png' });

        expect(profilePictureErrorMsg).not.toHaveClass('showed');
        await userEvent.upload(profilePictureInput, file);
        expect(profilePictureErrorMsg).not.toHaveClass('showed');
        userEvent.click(submitInput);
        expect(profilePictureErrorMsg).not.toHaveClass('showed');

        // ERROR... WHY???
      });
      test('entering wrong', () => {
        render(<Form />);

        const profilePictureInput = screen.getByLabelText('profile picture:');
        const profilePictureErrorMsg = screen.getByText('pick correct img');
        const submitInput = screen.getByTestId('SubmitInput');
        const file = new File([], '', { type: undefined });

        expect(profilePictureErrorMsg).not.toHaveClass('showed');
        userEvent.upload(profilePictureInput, file);
        expect(profilePictureErrorMsg).not.toHaveClass('showed');
        userEvent.click(submitInput);
        expect(profilePictureErrorMsg).toHaveClass('showed');
      });
      test('correcting', () => {
        render(<Form />);

        const profilePictureInput = screen.getByLabelText('profile picture:');
        const profilePictureErrorMsg = screen.getByText('pick correct img');
        const submitInput = screen.getByTestId('SubmitInput');
        const fileIncorrect = new File([], '', { type: undefined });
        const fileCorrect = new File(['hello'], 'hello.png', { type: 'image/png' });

        userEvent.upload(profilePictureInput, fileIncorrect);
        userEvent.click(submitInput);
        expect(profilePictureErrorMsg).toHaveClass('showed');
        userEvent.upload(profilePictureInput, fileCorrect);
        expect(profilePictureErrorMsg).not.toHaveClass('showed');
      });
    });
    describe('on agreeToProcessingMyData', () => {
      test('entering right', () => {
        render(<Form />);

        const agreeToProcessingMyDataInput = screen.getByLabelText('- agree to processing my data');
        const agreeToProcessingMyDataErrorMsg = screen.getAllByText('must be checked')[0];
        const submitInput = screen.getByTestId('SubmitInput');

        expect(agreeToProcessingMyDataErrorMsg).not.toHaveClass('showed');
        userEvent.click(agreeToProcessingMyDataInput);
        expect(agreeToProcessingMyDataErrorMsg).not.toHaveClass('showed');
        userEvent.click(submitInput);
        expect(agreeToProcessingMyDataErrorMsg).not.toHaveClass('showed');
      });
      test('entering wrong', () => {
        render(<Form />);

        const agreeToProcessingMyDataInput = screen.getByLabelText('- agree to processing my data');
        const agreeToProcessingMyDataErrorMsg = screen.getAllByText('must be checked')[0];
        const submitInput = screen.getByTestId('SubmitInput');

        userEvent.click(agreeToProcessingMyDataInput);
        userEvent.click(agreeToProcessingMyDataInput);
        expect(agreeToProcessingMyDataErrorMsg).not.toHaveClass('showed');
        userEvent.click(submitInput);
        expect(agreeToProcessingMyDataErrorMsg).toHaveClass('showed');
      });
      test('correcting', () => {
        render(<Form />);

        const agreeToProcessingMyDataInput = screen.getByLabelText('- agree to processing my data');
        const agreeToProcessingMyDataErrorMsg = screen.getAllByText('must be checked')[0];
        const submitInput = screen.getByTestId('SubmitInput');

        userEvent.click(agreeToProcessingMyDataInput);
        userEvent.click(agreeToProcessingMyDataInput);
        userEvent.click(submitInput);
        expect(agreeToProcessingMyDataErrorMsg).toHaveClass('showed');
        userEvent.click(agreeToProcessingMyDataInput);
        expect(agreeToProcessingMyDataErrorMsg).not.toHaveClass('showed');
      });
    });
    describe('on agreeReceiveAdvertisement', () => {
      test('entering right', () => {
        render(<Form />);

        const agreeReceiveAdvertisementInput = screen.getByLabelText('- receive advertisement');
        const agreeReceiveAdvertisementErrorMsg = screen.getAllByText('must be checked')[1];
        const submitInput = screen.getByTestId('SubmitInput');

        expect(agreeReceiveAdvertisementErrorMsg).not.toHaveClass('showed');
        userEvent.click(agreeReceiveAdvertisementInput);
        expect(agreeReceiveAdvertisementErrorMsg).not.toHaveClass('showed');
        userEvent.click(submitInput);
        expect(agreeReceiveAdvertisementErrorMsg).not.toHaveClass('showed');
      });
      test('entering wrong', () => {
        render(<Form />);

        const agreeReceiveAdvertisementInput = screen.getByLabelText('- receive advertisement');
        const agreeReceiveAdvertisementErrorMsg = screen.getAllByText('must be checked')[1];
        const submitInput = screen.getByTestId('SubmitInput');

        expect(agreeReceiveAdvertisementErrorMsg).not.toHaveClass('showed');
        userEvent.click(agreeReceiveAdvertisementInput);
        userEvent.click(agreeReceiveAdvertisementInput);
        expect(agreeReceiveAdvertisementErrorMsg).not.toHaveClass('showed');
        userEvent.click(submitInput);
        expect(agreeReceiveAdvertisementErrorMsg).toHaveClass('showed');
      });
      test('correcting', () => {
        render(<Form />);

        const agreeReceiveAdvertisementInput = screen.getByLabelText('- receive advertisement');
        const agreeReceiveAdvertisementErrorMsg = screen.getAllByText('must be checked')[1];
        const submitInput = screen.getByTestId('SubmitInput');

        userEvent.click(agreeReceiveAdvertisementInput);
        userEvent.click(agreeReceiveAdvertisementInput);
        userEvent.click(submitInput);
        expect(agreeReceiveAdvertisementErrorMsg).toHaveClass('showed');
        userEvent.click(agreeReceiveAdvertisementInput);
        expect(agreeReceiveAdvertisementErrorMsg).not.toHaveClass('showed');
      });
    });
    describe('on switcherMaleOption', () => {
      test('entering right', () => {
        render(<Form />);

        const switcherMaleOptionInput = screen.getByLabelText('- Male');
        const switcherMaleOptionErrorMsg = screen.getByText('u musk pick one of these');
        const submitInput = screen.getByTestId('SubmitInput');

        expect(switcherMaleOptionErrorMsg).not.toHaveClass('showed');
        userEvent.click(switcherMaleOptionInput);
        expect(switcherMaleOptionErrorMsg).not.toHaveClass('showed');
        userEvent.click(submitInput);
        expect(switcherMaleOptionErrorMsg).not.toHaveClass('showed');
      });
      test('entering wrong', () => {
        render(<Form />);

        const agreeReceiveAdvertisementInput = screen.getByLabelText('- receive advertisement');
        const switcherMaleOptionErrorMsg = screen.getByText('u musk pick one of these');
        const submitInput = screen.getByTestId('SubmitInput');

        expect(switcherMaleOptionErrorMsg).not.toHaveClass('showed');
        userEvent.click(agreeReceiveAdvertisementInput);
        expect(switcherMaleOptionErrorMsg).not.toHaveClass('showed');
        userEvent.click(submitInput);
        expect(switcherMaleOptionErrorMsg).toHaveClass('showed');
      });
      test('correcting', () => {
        render(<Form />);

        const agreeReceiveAdvertisementInput = screen.getByLabelText('- receive advertisement');
        const switcherMaleOptionInput = screen.getByLabelText('- Male');
        const switcherMaleOptionErrorMsg = screen.getByText('u musk pick one of these');
        const submitInput = screen.getByTestId('SubmitInput');

        userEvent.click(agreeReceiveAdvertisementInput);
        userEvent.click(submitInput);
        expect(switcherMaleOptionErrorMsg).toHaveClass('showed');
        userEvent.click(switcherMaleOptionInput);
        expect(switcherMaleOptionErrorMsg).not.toHaveClass('showed');
      });
    });
    describe('on switcherFemaleOption', () => {
      test('entering right', () => {
        render(<Form />);

        const switcherFemaleOptionInput = screen.getByLabelText('- Female');
        const switcherFemaleOptionErrorMsg = screen.getByText('u musk pick one of these');
        const submitInput = screen.getByTestId('SubmitInput');

        expect(switcherFemaleOptionErrorMsg).not.toHaveClass('showed');
        userEvent.click(switcherFemaleOptionInput);
        expect(switcherFemaleOptionErrorMsg).not.toHaveClass('showed');
        userEvent.click(submitInput);
        expect(switcherFemaleOptionErrorMsg).not.toHaveClass('showed');
      });
      test('entering wrong', () => {
        render(<Form />);

        const agreeReceiveAdvertisementInput = screen.getByLabelText('- receive advertisement');
        const switcherFemaleOptionErrorMsg = screen.getByText('u musk pick one of these');
        const submitInput = screen.getByTestId('SubmitInput');

        expect(switcherFemaleOptionErrorMsg).not.toHaveClass('showed');
        userEvent.click(agreeReceiveAdvertisementInput);
        expect(switcherFemaleOptionErrorMsg).not.toHaveClass('showed');
        userEvent.click(submitInput);
        expect(switcherFemaleOptionErrorMsg).toHaveClass('showed');
      });
      test('correcting', () => {
        render(<Form />);

        const agreeReceiveAdvertisementInput = screen.getByLabelText('- receive advertisement');
        const switcherFemaleOptionInput = screen.getByLabelText('- Female');
        const switcherFemaleOptionErrorMsg = screen.getByText('u musk pick one of these');
        const submitInput = screen.getByTestId('SubmitInput');

        userEvent.click(agreeReceiveAdvertisementInput);
        userEvent.click(submitInput);
        expect(switcherFemaleOptionErrorMsg).toHaveClass('showed');
        userEvent.click(switcherFemaleOptionInput);
        expect(switcherFemaleOptionErrorMsg).not.toHaveClass('showed');
      });
    });
  });
});
