import React from 'react';
import { act, render, screen, waitFor } from '@testing-library/react';
import Form from './Form';
import userEvent from '@testing-library/user-event/dist';
import createShiftedDate from '../../tests/functions/createShiftedDate';

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
    const wrapToPromiseWithTimeout = async (clBck: () => void) => {
      await new Promise((resolve) => {
        setTimeout(() => {
          clBck();
          resolve(null);
        }, 0);
      });
    };

    describe('on firstName', () => {
      test('entering right', async () => {
        render(<Form />);

        const firstNameInput = screen.getByLabelText('First Name:');
        const ErrorMsg = 'ur name must include letters only & be > 0 symbols';
        const submitInput = screen.getByTestId('SubmitInput');

        expect(screen.queryByText(ErrorMsg)).not.toBeInTheDocument();
        userEvent.type(firstNameInput, 'CorrectFirstname');
        expect(screen.queryByText(ErrorMsg)).not.toBeInTheDocument();
        expect(submitInput).not.toBeDisabled();
        userEvent.click(submitInput);
        expect(await screen.findByTestId('SubmitInput')).toBeDisabled();
        await wrapToPromiseWithTimeout(() => {
          expect(screen.queryByText(ErrorMsg)).not.toBeInTheDocument();
        });
      });
      test('entering wrong', async () => {
        render(<Form />);

        const firstNameInput = screen.getByLabelText('First Name:');
        const ErrorMsg = 'ur name must include letters only & be > 0 symbols';
        const submitInput = screen.getByTestId('SubmitInput');

        expect(screen.queryByText(ErrorMsg)).not.toBeInTheDocument();
        userEvent.type(firstNameInput, 'IncorrectFirstname123');
        expect(screen.queryByText(ErrorMsg)).not.toBeInTheDocument();
        expect(submitInput).not.toBeDisabled();
        userEvent.click(submitInput);
        expect(await screen.findByTestId('SubmitInput')).toBeDisabled();
        await wrapToPromiseWithTimeout(() => {
          expect(screen.queryByText(ErrorMsg)).toBeInTheDocument();
        });
      });
      test('correcting', async () => {
        render(<Form />);

        const firstNameInput = screen.getByLabelText('First Name:');
        const ErrorMsg = 'ur name must include letters only & be > 0 symbols';
        const submitInput = screen.getByTestId('SubmitInput');

        userEvent.type(firstNameInput, 'IncorrectFirstname123');
        userEvent.click(submitInput);
        expect(await screen.findByTestId('SubmitInput')).toBeDisabled();
        await wrapToPromiseWithTimeout(() => {
          expect(screen.queryByText(ErrorMsg)).toBeInTheDocument();
        });
        userEvent.clear(firstNameInput);
        expect(screen.queryByText(ErrorMsg)).not.toBeInTheDocument();
      });
    });
    describe('on lastName', () => {
      test('entering right', async () => {
        render(<Form />);

        const lastNameInput = screen.getByLabelText('Last Name:');
        const ErrorMsg = 'ur surname must include letters only & be > 0 symbols';
        const submitInput = screen.getByTestId('SubmitInput');

        expect(screen.queryByText(ErrorMsg)).not.toBeInTheDocument();
        userEvent.type(lastNameInput, 'CorrectLastname');
        expect(screen.queryByText(ErrorMsg)).not.toBeInTheDocument();
        expect(submitInput).not.toBeDisabled();
        userEvent.click(submitInput);
        expect(await screen.findByTestId('SubmitInput')).toBeDisabled();
        await wrapToPromiseWithTimeout(() => {
          expect(screen.queryByText(ErrorMsg)).not.toBeInTheDocument();
        });
      });
      test('entering wrong', async () => {
        render(<Form />);

        const lastNameInput = screen.getByLabelText('Last Name:');
        const lastNameErrorMsg = screen.queryByText(
          'ur surname must include letters only & be > 0 symbols'
        );
        const submitInput = screen.getByTestId('SubmitInput');

        expect(lastNameErrorMsg).not.toBeInTheDocument();
        userEvent.type(lastNameInput, 'IncorrectLastname123');
        expect(lastNameErrorMsg).not.toBeInTheDocument();
        userEvent.click(submitInput);
        expect(await screen.findByTestId('SubmitInput')).toBeDisabled();
        await wrapToPromiseWithTimeout(() => {
          const lastNameErrorMsg = screen.queryByText(
            'ur surname must include letters only & be > 0 symbols'
          );
          expect(lastNameErrorMsg).toBeInTheDocument();
        });
      });
      test('correcting', async () => {
        render(<Form />);

        const lastNameInput = screen.getByLabelText('Last Name:');
        const lastNameErrorMsg = screen.queryByText(
          'ur surname must include letters only & be > 0 symbols'
        );
        const submitInput = screen.getByTestId('SubmitInput');

        userEvent.type(lastNameInput, 'IncorrectLastname123');
        userEvent.click(submitInput);
        expect(await screen.findByTestId('SubmitInput')).toBeDisabled();
        await wrapToPromiseWithTimeout(() => {
          const lastNameErrorMsg = screen.queryByText(
            'ur surname must include letters only & be > 0 symbols'
          );
          expect(lastNameErrorMsg).toBeInTheDocument();
        });
        userEvent.clear(lastNameInput);
        expect(lastNameErrorMsg).not.toBeInTheDocument();
      });
    });
    describe('on zipCode', () => {
      test('entering right', async () => {
        render(<Form />);

        const zipCodeInput = screen.getByLabelText('Zip-code:');
        const zipCodeErrorMsg = screen.queryByText(
          'ur zip-code must correspond to format "XXXXX-YYYY"'
        );
        const submitInput = screen.getByTestId('SubmitInput');

        expect(zipCodeErrorMsg).not.toBeInTheDocument();
        userEvent.type(zipCodeInput, '12345-1234');
        expect(zipCodeErrorMsg).not.toBeInTheDocument();
        userEvent.click(submitInput);
        expect(await screen.findByTestId('SubmitInput')).toBeDisabled();
        await wrapToPromiseWithTimeout(() => {
          const zipCodeErrorMsg = screen.queryByText(
            'ur zip-code must correspond to format "XXXXX-YYYY"'
          );
          expect(zipCodeErrorMsg).not.toBeInTheDocument();
        });
      });
      test('entering wrong', async () => {
        render(<Form />);

        const zipCodeInput = screen.getByLabelText('Zip-code:');
        const zipCodeErrorMsg = screen.queryByText(
          'ur zip-code must correspond to format "XXXXX-YYYY"'
        );
        const submitInput = screen.getByTestId('SubmitInput');

        expect(zipCodeErrorMsg).not.toBeInTheDocument();
        userEvent.type(zipCodeInput, '12345-12345');
        expect(zipCodeErrorMsg).not.toBeInTheDocument();
        userEvent.click(submitInput);
        expect(await screen.findByTestId('SubmitInput')).toBeDisabled();
        await wrapToPromiseWithTimeout(() => {
          const zipCodeErrorMsg = screen.queryByText(
            'ur zip-code must correspond to format "XXXXX-YYYY"'
          );
          expect(zipCodeErrorMsg).toBeInTheDocument();
        });
      });
      test('correcting', async () => {
        render(<Form />);

        const zipCodeInput = screen.getByLabelText('Zip-code:');
        const zipCodeErrorMsg = screen.queryByText(
          'ur zip-code must correspond to format "XXXXX-YYYY"'
        );
        const submitInput = screen.getByTestId('SubmitInput');

        userEvent.type(zipCodeInput, '12345-12345');
        userEvent.click(submitInput);
        expect(await screen.findByTestId('SubmitInput')).toBeDisabled();
        await wrapToPromiseWithTimeout(() => {
          const zipCodeErrorMsg = screen.queryByText(
            'ur zip-code must correspond to format "XXXXX-YYYY"'
          );
          expect(zipCodeErrorMsg).toBeInTheDocument();
        });
        userEvent.clear(zipCodeInput);
        expect(zipCodeErrorMsg).not.toBeInTheDocument();
      });
    });
    describe('on birthday', () => {
      test('entering right', async () => {
        render(<Form />);

        const birthdayInput = screen.getByLabelText('birthday:');
        const birthdayErrorMsg = screen.queryByText('select date < NOW');
        const submitInput = screen.getByTestId('SubmitInput');

        expect(birthdayErrorMsg).not.toBeInTheDocument();
        userEvent.type(birthdayInput, createShiftedDate(-1));
        expect(birthdayErrorMsg).not.toBeInTheDocument();
        userEvent.click(submitInput);
        expect(await screen.findByTestId('SubmitInput')).toBeDisabled();
        await wrapToPromiseWithTimeout(() => {
          const birthdayErrorMsg = screen.queryByText('select date < NOW');
          expect(birthdayErrorMsg).not.toBeInTheDocument();
        });
      });
      test('entering wrong', async () => {
        render(<Form />);

        const birthdayInput = screen.getByLabelText('birthday:');
        const birthdayErrorMsg = screen.queryByText('select date < NOW');
        const submitInput = screen.getByTestId('SubmitInput');

        expect(birthdayErrorMsg).not.toBeInTheDocument();
        userEvent.type(birthdayInput, createShiftedDate(1));
        expect(birthdayErrorMsg).not.toBeInTheDocument();
        userEvent.click(submitInput);
        expect(await screen.findByTestId('SubmitInput')).toBeDisabled();
        await wrapToPromiseWithTimeout(() => {
          const birthdayErrorMsg = screen.queryByText('select date < NOW');
          expect(birthdayErrorMsg).toBeInTheDocument();
        });
      });
      test('correcting', async () => {
        render(<Form />);

        const birthdayInput = screen.getByLabelText('birthday:');
        const birthdayErrorMsg = screen.queryByText('select date < NOW');
        const submitInput = screen.getByTestId('SubmitInput');

        userEvent.type(birthdayInput, createShiftedDate(1));
        userEvent.click(submitInput);
        expect(await screen.findByTestId('SubmitInput')).toBeDisabled();
        await wrapToPromiseWithTimeout(() => {
          const birthdayErrorMsg = screen.queryByText('select date < NOW');
          expect(birthdayErrorMsg).toBeInTheDocument();
        });
        userEvent.clear(birthdayInput);
        expect(birthdayErrorMsg).not.toBeInTheDocument();
      });
    });
    describe('on arrivingDate', () => {
      test('entering right', async () => {
        render(<Form />);

        const arrivingDateInput = screen.getByLabelText('arriving date:');
        const arrivingDateErrorMsg = screen.queryByText('select date > NOW');
        const submitInput = screen.getByTestId('SubmitInput');

        expect(arrivingDateErrorMsg).not.toBeInTheDocument();
        userEvent.type(arrivingDateInput, createShiftedDate(1));
        expect(arrivingDateErrorMsg).not.toBeInTheDocument();
        userEvent.click(submitInput);
        expect(await screen.findByTestId('SubmitInput')).toBeDisabled();
        await wrapToPromiseWithTimeout(() => {
          const arrivingDateErrorMsg = screen.queryByText('select date > NOW');
          expect(arrivingDateErrorMsg).not.toBeInTheDocument();
        });
      });
      test('entering wrong', async () => {
        render(<Form />);

        const arrivingDateInput = screen.getByLabelText('arriving date:');
        const arrivingDateErrorMsg = screen.queryByText('select date > NOW');
        const submitInput = screen.getByTestId('SubmitInput');

        expect(arrivingDateErrorMsg).not.toBeInTheDocument();
        userEvent.type(arrivingDateInput, createShiftedDate(-1));
        expect(arrivingDateErrorMsg).not.toBeInTheDocument();
        userEvent.click(submitInput);
        expect(await screen.findByTestId('SubmitInput')).toBeDisabled();
        await wrapToPromiseWithTimeout(() => {
          const arrivingDateErrorMsg = screen.queryByText('select date > NOW');
          expect(arrivingDateErrorMsg).toBeInTheDocument();
        });
      });
      test('correcting', async () => {
        render(<Form />);

        const arrivingDateInput = screen.getByLabelText('arriving date:');
        const arrivingDateErrorMsg = screen.queryByText('select date > NOW');
        const submitInput = screen.getByTestId('SubmitInput');

        userEvent.type(arrivingDateInput, createShiftedDate(-1));
        userEvent.click(submitInput);
        expect(await screen.findByTestId('SubmitInput')).toBeDisabled();
        await wrapToPromiseWithTimeout(() => {
          const arrivingDateErrorMsg = screen.queryByText('select date > NOW');
          expect(arrivingDateErrorMsg).toBeInTheDocument();
        });
        userEvent.clear(arrivingDateInput);
        expect(arrivingDateErrorMsg).not.toBeInTheDocument();
      });
    });
    describe('on country', () => {
      test('entering right', async () => {
        render(<Form />);

        const countryInput = screen.getByLabelText('country:');
        const countryErrorMsg = screen.queryByText('u must pick some country');
        const submitInput = screen.getByTestId('SubmitInput');

        expect(countryErrorMsg).not.toBeInTheDocument();
        userEvent.selectOptions(countryInput, 'Belarus');
        expect(countryErrorMsg).not.toBeInTheDocument();
        userEvent.click(submitInput);
        expect(await screen.findByTestId('SubmitInput')).toBeDisabled();
        await wrapToPromiseWithTimeout(() => {
          const countryErrorMsg = screen.queryByText('u must pick some country');
          expect(countryErrorMsg).not.toBeInTheDocument();
        });
      });
      test('entering wrong', async () => {
        render(<Form />);

        const countryInput = screen.getByLabelText('country:');
        const countryErrorMsg = screen.queryByText('u must pick some country');
        const submitInput = screen.getByTestId('SubmitInput');

        expect(countryErrorMsg).not.toBeInTheDocument();
        userEvent.selectOptions(countryInput, '');
        expect(countryErrorMsg).not.toBeInTheDocument();
        userEvent.click(submitInput);
        expect(await screen.findByTestId('SubmitInput')).toBeDisabled();
        await wrapToPromiseWithTimeout(() => {
          const countryErrorMsg = screen.queryByText('u must pick some country');
          expect(countryErrorMsg).toBeInTheDocument();
        });
      });
      test('correcting', async () => {
        render(<Form />);

        const countryInput = screen.getByLabelText('country:');
        const countryErrorMsg = screen.queryByText('u must pick some country');
        const submitInput = screen.getByTestId('SubmitInput');

        userEvent.selectOptions(countryInput, '');
        userEvent.click(submitInput);
        expect(await screen.findByTestId('SubmitInput')).toBeDisabled();
        await wrapToPromiseWithTimeout(() => {
          const countryErrorMsg = screen.queryByText('u must pick some country');
          expect(countryErrorMsg).toBeInTheDocument();
        });
        userEvent.selectOptions(countryInput, 'Belarus');
        expect(countryErrorMsg).not.toBeInTheDocument();
      });
    });
    describe('on profilePicture', () => {
      let fileCorrect: File;
      let fileIncorrect: File;

      beforeEach(() => {
        window.URL.createObjectURL = jest.fn((file: File) => {
          if (file.type || file.name || file.size) {
            return 'blob:http://localhost:3000/f1fc20dc-94e3-4953-a569-aec5ac1adcd2';
          } else {
            return '';
          }
        });
        fileCorrect = new File(['hello'], 'hello.png', { type: 'image/png' });
        fileIncorrect = null as unknown as File;
      });

      test('entering right', async () => {
        render(<Form />);

        const profilePictureInput: HTMLInputElement = screen.getByLabelText('profile picture:');
        const profilePictureErrorMsg = screen.queryByText('pick correct img');
        const submitInput = screen.getByTestId('SubmitInput');

        expect(profilePictureErrorMsg).not.toBeInTheDocument();
        await act(async () => {
          await waitFor(() => {
            userEvent.upload(profilePictureInput, fileCorrect);
          });
        });
        expect(profilePictureErrorMsg).not.toBeInTheDocument();
        userEvent.click(submitInput);
        expect(await screen.findByTestId('SubmitInput')).toBeDisabled();
        await wrapToPromiseWithTimeout(() => {
          const profilePictureErrorMsg = screen.queryByText('pick correct img');
          expect(profilePictureErrorMsg).not.toBeInTheDocument();
        });
      });
      /*test('entering wrong', async () => {
        render(<Form />);

        const profilePictureInput = screen.getByLabelText('profile picture:');
        const profilePictureErrorMsg = screen.queryByText('pick correct img');
        const submitInput = screen.getByTestId('SubmitInput');

        expect(profilePictureErrorMsg).not.toBeInTheDocument();
        await act(async () => {
          await waitFor(() => {
            userEvent.upload(profilePictureInput, fileCorrect);
          });
        });
        await act(async () => {
          await waitFor(() => {
            userEvent.click(profilePictureInput);
          });
        });
        await act(async () => {
          await waitFor(() => {
            userEvent.keyboard('{Escape}');
          });
        });
        expect(profilePictureErrorMsg).not.toBeInTheDocument();
        userEvent.click(submitInput);
        expect(await screen.findByTestId('SubmitInput')).toBeDisabled();
        await wrapToPromiseWithTimeout(() => {
          const profilePictureErrorMsg = screen.queryByText('pick correct img');
          expect(profilePictureErrorMsg).toBeInTheDocument();
        });
      });
      test('correcting', async () => {
        render(<Form />);

        const profilePictureInput = screen.getByLabelText('profile picture:');
        const profilePictureErrorMsg = screen.queryByText('pick correct img');
        const submitInput = screen.getByTestId('SubmitInput');

        await act(async () => {
          await waitFor(() => {
            userEvent.upload(profilePictureInput, fileIncorrect);
          });
        });
        userEvent.click(submitInput);
        expect(await screen.findByTestId('SubmitInput')).toBeDisabled();
        await wrapToPromiseWithTimeout(() => {
          const profilePictureErrorMsg = screen.queryByText('pick correct img');
          expect(profilePictureErrorMsg).toBeInTheDocument();
        });
        await act(async () => {
          await waitFor(() => {
            userEvent.upload(profilePictureInput, fileCorrect);
          });
        });
        expect(profilePictureErrorMsg).not.toBeInTheDocument();
      });*/
    });
    describe('on agreeToProcessingMyData', () => {
      test('entering right', async () => {
        render(<Form />);

        const agreeToProcessingMyDataInput = screen.getByLabelText('- agree to processing my data');
        const agreeToProcessingMyDataErrorMsg = screen.queryAllByText('must be checked')[0];
        const submitInput = screen.getByTestId('SubmitInput');

        expect(agreeToProcessingMyDataErrorMsg).toBeUndefined();
        userEvent.click(agreeToProcessingMyDataInput);
        expect(agreeToProcessingMyDataErrorMsg).toBeUndefined();
        userEvent.click(submitInput);
        expect(await screen.findByTestId('SubmitInput')).toBeDisabled();
        await wrapToPromiseWithTimeout(() => {
          const agreeToProcessingMyDataErrorMsg = screen.queryAllByText('must be checked');
          expect(agreeToProcessingMyDataErrorMsg).toHaveLength(1);
        });
      });
      test('entering wrong', async () => {
        render(<Form />);

        const agreeToProcessingMyDataInput = screen.getByLabelText('- agree to processing my data');
        const agreeToProcessingMyDataErrorMsg = screen.queryAllByText('must be checked')[0];
        const submitInput = screen.getByTestId('SubmitInput');

        userEvent.click(agreeToProcessingMyDataInput);
        userEvent.click(agreeToProcessingMyDataInput);
        expect(agreeToProcessingMyDataErrorMsg).toBeUndefined();
        userEvent.click(submitInput);
        expect(await screen.findByTestId('SubmitInput')).toBeDisabled();
        await wrapToPromiseWithTimeout(() => {
          const agreeToProcessingMyDataErrorMsg = screen.queryAllByText('must be checked');
          expect(agreeToProcessingMyDataErrorMsg).toHaveLength(2);
        });
      });
      test('correcting', async () => {
        render(<Form />);

        const agreeToProcessingMyDataInput = screen.getByLabelText('- agree to processing my data');
        const agreeToProcessingMyDataErrorMsg = screen.queryAllByText('must be checked')[0];
        const submitInput = screen.getByTestId('SubmitInput');

        userEvent.click(agreeToProcessingMyDataInput);
        userEvent.click(agreeToProcessingMyDataInput);
        userEvent.click(submitInput);
        expect(await screen.findByTestId('SubmitInput')).toBeDisabled();
        await wrapToPromiseWithTimeout(() => {
          const agreeToProcessingMyDataErrorMsg = screen.queryAllByText('must be checked');
          expect(agreeToProcessingMyDataErrorMsg).toHaveLength(2);
        });
        userEvent.click(agreeToProcessingMyDataInput);
        expect(agreeToProcessingMyDataErrorMsg).toBeUndefined();
      });
    });
    describe('on agreeReceiveAdvertisement', () => {
      test('entering right', async () => {
        render(<Form />);

        const agreeReceiveAdvertisementInput = screen.getByLabelText('- receive advertisement');
        const agreeReceiveAdvertisementErrorMsg = screen.queryAllByText('must be checked')[1];
        const submitInput = screen.getByTestId('SubmitInput');

        expect(agreeReceiveAdvertisementErrorMsg).toBeUndefined();
        userEvent.click(agreeReceiveAdvertisementInput);
        expect(agreeReceiveAdvertisementErrorMsg).toBeUndefined();
        userEvent.click(submitInput);
        expect(await screen.findByTestId('SubmitInput')).toBeDisabled();
        await wrapToPromiseWithTimeout(() => {
          const agreeReceiveAdvertisementErrorMsg = screen.queryAllByText('must be checked');
          expect(agreeReceiveAdvertisementErrorMsg).toHaveLength(1);
        });
      });
      test('entering wrong', async () => {
        render(<Form />);

        const agreeReceiveAdvertisementInput = screen.getByLabelText('- receive advertisement');
        const agreeReceiveAdvertisementErrorMsg = screen.queryAllByText('must be checked')[1];
        const submitInput = screen.getByTestId('SubmitInput');

        expect(agreeReceiveAdvertisementErrorMsg).toBeUndefined();
        userEvent.click(agreeReceiveAdvertisementInput);
        userEvent.click(agreeReceiveAdvertisementInput);
        expect(agreeReceiveAdvertisementErrorMsg).toBeUndefined();
        userEvent.click(submitInput);
        expect(await screen.findByTestId('SubmitInput')).toBeDisabled();
        await wrapToPromiseWithTimeout(() => {
          const agreeReceiveAdvertisementErrorMsg = screen.queryAllByText('must be checked');
          expect(agreeReceiveAdvertisementErrorMsg).toHaveLength(2);
        });
      });
      test('correcting', async () => {
        render(<Form />);

        const agreeReceiveAdvertisementInput = screen.getByLabelText('- receive advertisement');
        const agreeReceiveAdvertisementErrorMsg = screen.queryAllByText('must be checked')[1];
        const submitInput = screen.getByTestId('SubmitInput');

        userEvent.click(agreeReceiveAdvertisementInput);
        userEvent.click(agreeReceiveAdvertisementInput);
        userEvent.click(submitInput);
        expect(await screen.findByTestId('SubmitInput')).toBeDisabled();
        await wrapToPromiseWithTimeout(() => {
          const agreeReceiveAdvertisementErrorMsg = screen.queryAllByText('must be checked');
          expect(agreeReceiveAdvertisementErrorMsg).toHaveLength(2);
        });
        userEvent.click(agreeReceiveAdvertisementInput);
        expect(agreeReceiveAdvertisementErrorMsg).toBeUndefined();
      });
    });
    describe('on switcherMaleOption', () => {
      test('entering right', async () => {
        render(<Form />);

        const switcherMaleOptionInput = screen.getByLabelText('- Male');
        const switcherMaleOptionErrorMsg = screen.queryByText('u musk pick one of these');
        const submitInput = screen.getByTestId('SubmitInput');

        expect(switcherMaleOptionErrorMsg).not.toBeInTheDocument();
        userEvent.click(switcherMaleOptionInput);
        expect(switcherMaleOptionErrorMsg).not.toBeInTheDocument();
        userEvent.click(submitInput);
        expect(await screen.findByTestId('SubmitInput')).toBeDisabled();
        await wrapToPromiseWithTimeout(() => {
          const switcherMaleOptionErrorMsg = screen.queryByText('u musk pick one of these');
          expect(switcherMaleOptionErrorMsg).not.toBeInTheDocument();
        });
      });
      test('entering wrong', async () => {
        render(<Form />);

        const agreeReceiveAdvertisementInput = screen.getByLabelText('- receive advertisement');
        const switcherMaleOptionErrorMsg = screen.queryByText('u musk pick one of these');
        const submitInput = screen.getByTestId('SubmitInput');

        expect(switcherMaleOptionErrorMsg).not.toBeInTheDocument();
        userEvent.click(agreeReceiveAdvertisementInput);
        expect(switcherMaleOptionErrorMsg).not.toBeInTheDocument();
        userEvent.click(submitInput);
        expect(await screen.findByTestId('SubmitInput')).toBeDisabled();
        await wrapToPromiseWithTimeout(() => {
          const switcherMaleOptionErrorMsg = screen.queryByText('u musk pick one of these');
          expect(switcherMaleOptionErrorMsg).toBeInTheDocument();
        });
      });
      test('correcting', async () => {
        render(<Form />);

        const agreeReceiveAdvertisementInput = screen.getByLabelText('- receive advertisement');
        const switcherMaleOptionInput = screen.getByLabelText('- Male');
        const switcherMaleOptionErrorMsg = screen.queryByText('u musk pick one of these');
        const submitInput = screen.getByTestId('SubmitInput');

        userEvent.click(agreeReceiveAdvertisementInput);
        userEvent.click(submitInput);
        expect(await screen.findByTestId('SubmitInput')).toBeDisabled();
        await wrapToPromiseWithTimeout(() => {
          const switcherMaleOptionErrorMsg = screen.queryByText('u musk pick one of these');
          expect(switcherMaleOptionErrorMsg).toBeInTheDocument();
        });
        userEvent.click(switcherMaleOptionInput);
        expect(switcherMaleOptionErrorMsg).not.toBeInTheDocument();
      });
    });
    describe('on switcherFemaleOption', () => {
      test('entering right', async () => {
        render(<Form />);

        const switcherFemaleOptionInput = screen.getByLabelText('- Female');
        const switcherFemaleOptionErrorMsg = screen.queryByText('u musk pick one of these');
        const submitInput = screen.getByTestId('SubmitInput');

        expect(switcherFemaleOptionErrorMsg).not.toBeInTheDocument();
        userEvent.click(switcherFemaleOptionInput);
        expect(switcherFemaleOptionErrorMsg).not.toBeInTheDocument();
        userEvent.click(submitInput);
        expect(await screen.findByTestId('SubmitInput')).toBeDisabled();
        await wrapToPromiseWithTimeout(() => {
          const switcherFemaleOptionErrorMsg = screen.queryByText('u musk pick one of these');
          expect(switcherFemaleOptionErrorMsg).not.toBeInTheDocument();
        });
      });
      test('entering wrong', async () => {
        render(<Form />);

        const agreeReceiveAdvertisementInput = screen.getByLabelText('- receive advertisement');
        const switcherFemaleOptionErrorMsg = screen.queryByText('u musk pick one of these');
        const submitInput = screen.getByTestId('SubmitInput');

        expect(switcherFemaleOptionErrorMsg).not.toBeInTheDocument();
        userEvent.click(agreeReceiveAdvertisementInput);
        expect(switcherFemaleOptionErrorMsg).not.toBeInTheDocument();
        userEvent.click(submitInput);
        expect(await screen.findByTestId('SubmitInput')).toBeDisabled();
        await wrapToPromiseWithTimeout(() => {
          const switcherFemaleOptionErrorMsg = screen.queryByText('u musk pick one of these');
          expect(switcherFemaleOptionErrorMsg).toBeInTheDocument();
        });
      });
      test('correcting', async () => {
        render(<Form />);

        const agreeReceiveAdvertisementInput = screen.getByLabelText('- receive advertisement');
        const switcherFemaleOptionInput = screen.getByLabelText('- Female');
        const switcherFemaleOptionErrorMsg = screen.queryByText('u musk pick one of these');
        const submitInput = screen.getByTestId('SubmitInput');

        userEvent.click(agreeReceiveAdvertisementInput);
        userEvent.click(submitInput);
        expect(await screen.findByTestId('SubmitInput')).toBeDisabled();
        await wrapToPromiseWithTimeout(() => {
          const switcherFemaleOptionErrorMsg = screen.queryByText('u musk pick one of these');
          expect(switcherFemaleOptionErrorMsg).toBeInTheDocument();
        });
        userEvent.click(switcherFemaleOptionInput);
        expect(switcherFemaleOptionErrorMsg).not.toBeInTheDocument();
      });
    });
  });
});
