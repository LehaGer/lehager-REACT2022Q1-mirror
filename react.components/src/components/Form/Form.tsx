import React from 'react';
import ItemStyles from './Form.module.css';
import TextInput from '../UI/Inputs/TextInput/TextInput';
import DateInput from '../UI/Inputs/DateInput/DateInput';
import DropdownInput from '../UI/Inputs/DropdownInput/DropdownInput';
import CheckboxInput from '../UI/Inputs/CheckboxInput/CheckboxInput';
import SwitcherInput from '../UI/Inputs/SwitcherInput/SwitcherInput';
import FileUploadInput from '../UI/Inputs/FileUploadInput/FileUploadInput';
import SubmitInput from '../UI/Inputs/SubmiInput/SubmitInput';
import { genderTypes, IFormProps, IFormState } from '../../types/interfaces';

class Form extends React.Component<IFormProps, IFormState> {
  private readonly formReference = React.createRef<HTMLFormElement>();
  private readonly firstName = React.createRef<TextInput>();
  private readonly lastName = React.createRef<TextInput>();
  private readonly zipCode = React.createRef<TextInput>();
  private readonly birthday = React.createRef<DateInput>();
  private readonly arrivingDate = React.createRef<DateInput>();
  private readonly country = React.createRef<DropdownInput>();
  private readonly isAgreeToProcConfData = React.createRef<CheckboxInput>();
  private readonly isAgreeToGetAdvToEmail = React.createRef<CheckboxInput>();
  private readonly gender = React.createRef<SwitcherInput>();
  private readonly profilePicture = React.createRef<FileUploadInput>();
  private readonly submit = React.createRef<SubmitInput>();

  constructor(props: IFormProps) {
    super(props);

    this.state = {
      isFirstNameCorrect: true,
      isLastNameCorrect: true,
      isZipCodeCorrect: true,
      isBirthdayCorrect: true,
      isArrivingDateCorrect: true,
      isCountryCorrect: true,
      isAgreementToProcConfDataCorrect: true,
      isAgreementToGetAdvToEmail: true,
      isGenderCorrect: true,
      isProfilePictureCorrect: true,
      isSubmitButtonDisabled: true,
    };

    this.handleClickSubmitButton = this.handleClickSubmitButton.bind(this);
  }

  async handleClickSubmitButton(event: React.SyntheticEvent): Promise<void> {
    event.preventDefault();

    await this.checkAll();

    await (() => {
      if (this.isFormCorrect()) {
        this.createCard();
        alert('SUCCESS! The new card has been created!');
        this.formReference.current?.reset();
      }
    })();

    await this.setState({ isSubmitButtonDisabled: true });
  }

  async checkAll(): Promise<void> {
    const checkFirstName = async () => {
      const isFirstNameCorrect = () => {
        const value = String(this.firstName.current?.getValue());
        return !/\d/.test(value) && /^.+$/.test(value);
      };
      await this.setState({ isFirstNameCorrect: isFirstNameCorrect() });
    };
    const checkLastName = async () => {
      const isLastNameCorrect = () => {
        const value = String(this.lastName.current?.getValue());
        return !/\d/.test(value) && /^.+$/.test(value);
      };
      await this.setState({ isLastNameCorrect: isLastNameCorrect() });
    };
    const checkZipCode = async () => {
      const isZipCodeCorrect = () => {
        return /^\d{5}-\d{4}$/.test(String(this.zipCode.current?.getValue()));
      };
      await this.setState({ isZipCodeCorrect: isZipCodeCorrect() });
    };
    const checkBirthday = async () => {
      const isBirthdayCorrect = () => {
        if (!this.birthday.current?.getValue()) return false;
        const year = new Date().getFullYear();
        const month = (new Date().getMonth() + 1).toString().padStart(2, '0');
        const day = new Date().getDate().toString().padStart(2, '0');
        const currentDate = `${year}-${month}-${day}`;
        return String(this.birthday.current?.getValue()) < currentDate;
      };
      await this.setState({ isBirthdayCorrect: isBirthdayCorrect() });
    };
    const checkArrivingDate = async () => {
      const isArrivingDateCorrect = () => {
        if (!this.arrivingDate.current?.getValue()) return false;
        const year = new Date().getFullYear();
        const month = (new Date().getMonth() + 1).toString().padStart(2, '0');
        const day = new Date().getDate().toString().padStart(2, '0');
        const currentDate = `${year}-${month}-${day}`;
        return String(this.arrivingDate.current?.getValue()) > currentDate;
      };
      await this.setState({ isArrivingDateCorrect: isArrivingDateCorrect() });
    };
    const checkCountry = async () => {
      const isCountryCorrect = () => {
        return !!String(this.country.current?.getValue()).trim();
      };
      await this.setState({ isCountryCorrect: isCountryCorrect() });
    };
    const checkAgreementToProcConfData = async () => {
      const isAgreementToProcConfDataCorrect = () => {
        return this.isAgreeToProcConfData.current
          ? this.isAgreeToProcConfData.current?.isChecked()
          : false;
      };
      await this.setState({ isAgreementToProcConfDataCorrect: isAgreementToProcConfDataCorrect() });
    };
    const checkAgreementToGetAdvToEmail = async () => {
      const isAgreementToGetAdvToEmail = () => {
        return this.isAgreeToGetAdvToEmail.current
          ? this.isAgreeToGetAdvToEmail.current?.isChecked()
          : false;
      };
      await this.setState({ isAgreementToGetAdvToEmail: isAgreementToGetAdvToEmail() });
    };
    const checkGender = async () => {
      const isGenderCorrect = () => {
        return !!this.gender.current?.getValue();
      };
      await this.setState({ isGenderCorrect: isGenderCorrect() });
    };
    const checkProfilePicture = async () => {
      const isProfilePictureCorrect = () => {
        return !!this.profilePicture.current?.getValue();
      };
      await this.setState({ isProfilePictureCorrect: isProfilePictureCorrect() });
    };

    await checkFirstName();
    await checkLastName();
    await checkZipCode();
    await checkBirthday();
    await checkArrivingDate();
    await checkCountry();
    await checkAgreementToProcConfData();
    await checkAgreementToGetAdvToEmail();
    await checkGender();
    await checkProfilePicture();
  }

  isFormCorrect(): boolean {
    return (
      this.state.isFirstNameCorrect &&
      this.state.isLastNameCorrect &&
      this.state.isZipCodeCorrect &&
      this.state.isBirthdayCorrect &&
      this.state.isArrivingDateCorrect &&
      this.state.isCountryCorrect &&
      this.state.isAgreementToProcConfDataCorrect &&
      this.state.isAgreementToGetAdvToEmail &&
      this.state.isGenderCorrect &&
      this.state.isProfilePictureCorrect
    );
  }

  hideErrorFromElement(targetElement: string): void {
    this.setState({
      ...this.state,
      [targetElement]: true,
      isSubmitButtonDisabled: false,
    });
    /*setTimeout(() => {
      this.handleChangeForm();
    }, 0);*/
  }

  createCard(): void {
    if (this.props.addNewCard) {
      this.props.addNewCard({
        arrivingDate: String(this.arrivingDate.current?.getValue()),
        birthday: String(this.birthday.current?.getValue()),
        country: String(this.country.current?.getValue()),
        firstName: String(this.firstName.current?.getValue()),
        gender: this.gender.current?.getValue() as genderTypes,
        isAgreeToGetAdvToEmail: !!this.isAgreeToGetAdvToEmail.current?.isChecked(),
        isAgreeToProcConfData: !!this.isAgreeToProcConfData.current?.isChecked(),
        lastName: String(this.lastName.current?.getValue()),
        profilePicture: String(this.profilePicture.current?.getValue()),
        zipCode: String(this.zipCode.current?.getValue()),
      });
    }
  }

  render() {
    return (
      <form
        onSubmit={this.handleClickSubmitButton}
        className={ItemStyles.Form}
        ref={this.formReference}
        data-testid="Form"
      >
        <div>
          <TextInput
            id={'firstName'}
            name={'firstName'}
            defaultValue={''}
            ref={this.firstName}
            formatInstruction={'ur name must include letters only & be > 0 symbols'}
            isCorrectFormat={this.state.isFirstNameCorrect}
            label={'First Name: '}
            onChange={() => this.hideErrorFromElement('isFirstNameCorrect')}
            data-testid="FirstNameTextInput"
          />
          <TextInput
            id={'lastName'}
            name={'lastName'}
            defaultValue={''}
            ref={this.lastName}
            formatInstruction={'ur surname must include letters only & be > 0 symbols'}
            isCorrectFormat={this.state.isLastNameCorrect}
            label={'Last Name: '}
            onChange={() => this.hideErrorFromElement('isLastNameCorrect')}
            data-testid="LastNameTextInput"
          />
          <TextInput
            id={'zipCode'}
            name={'zipCode'}
            defaultValue={''}
            ref={this.zipCode}
            formatInstruction={'ur zip-code must correspond to format "XXXXX-YYYY"'}
            isCorrectFormat={this.state.isZipCodeCorrect}
            label={'Zip-code: '}
            onChange={() => this.hideErrorFromElement('isZipCodeCorrect')}
            data-testid="ZipCodeTextInput"
          />
        </div>
        <div>
          <DateInput
            id={'birthday'}
            name={'birthday'}
            defaultValue={''}
            ref={this.birthday}
            formatInstruction={'select date < NOW'}
            isCorrectFormat={this.state.isBirthdayCorrect}
            label={'birthday: '}
            onChange={() => this.hideErrorFromElement('isBirthdayCorrect')}
            data-testid="BirthdayDateInput"
          />
          <DateInput
            id={'arrivingDate'}
            name={'arrivingDate'}
            defaultValue={''}
            ref={this.arrivingDate}
            formatInstruction={'select date > NOW'}
            isCorrectFormat={this.state.isArrivingDateCorrect}
            label={'arriving date: '}
            onChange={() => this.hideErrorFromElement('isArrivingDateCorrect')}
            data-testid="arrivingDateInput"
          />
        </div>
        <div>
          <DropdownInput
            id={'country'}
            name={'country'}
            defaultValue={''}
            ref={this.country}
            formatInstruction={'u must pick some country'}
            isCorrectFormat={this.state.isCountryCorrect}
            label={'country:'}
            options={[
              'Åland Islands',
              'Belarus',
              'Canada',
              'El Salvador',
              'France',
              'Gambia',
              'Honduras',
              'Ireland',
              'Japan',
              'Kazakhstan',
              'Latvia',
              'Macao',
            ]}
            onChange={() => this.hideErrorFromElement('isCountryCorrect')}
            data-testid="CountryDropdownInput"
          />
        </div>
        <div>
          <CheckboxInput
            id={'isAgreeToProcConfData'}
            name={'isAgreeToProcConfData'}
            defaultChecked={false}
            ref={this.isAgreeToProcConfData}
            formatInstruction={'must be checked'}
            isCorrectFormat={this.state.isAgreementToProcConfDataCorrect}
            label={' - agree to processing my data'}
            onChange={() => this.hideErrorFromElement('isAgreementToProcConfDataCorrect')}
            data-testid="AgreementProcessDataCheckboxInput"
          />
          <CheckboxInput
            id={'isAgreeToGetAdvToEmail'}
            name={'isAgreeToGetAdvToEmail'}
            defaultChecked={false}
            ref={this.isAgreeToGetAdvToEmail}
            formatInstruction={'must be checked'}
            isCorrectFormat={this.state.isAgreementToGetAdvToEmail}
            label={' - receive advertisement'}
            onChange={() => this.hideErrorFromElement('isAgreementToGetAdvToEmail')}
            data-testid="AgreementGetAdvCheckboxInput"
          />
        </div>
        <div>
          <SwitcherInput
            name={'gender'}
            formatInstruction={'u musk pick one of these'}
            isCorrectFormat={this.state.isGenderCorrect}
            ref={this.gender}
            options={[
              {
                id: 'male',
                defaultChecked: false,
                label: ' - Male',
              },
              {
                id: 'female',
                defaultChecked: false,
                label: ' - Female',
              },
            ]}
            onChange={() => this.hideErrorFromElement('isGenderCorrect')}
            data-testid="genderSwitcherInput"
          />
        </div>
        <div>
          <FileUploadInput
            id={'profilePicture'}
            name={'profilePicture'}
            defaultValue={''}
            ref={this.profilePicture}
            formatInstruction={'pick correct img'}
            isCorrectFormat={this.state.isProfilePictureCorrect}
            label={'profile picture: '}
            onChange={() => this.hideErrorFromElement('isProfilePictureCorrect')}
          />
        </div>
        <div>
          <SubmitInput
            id={'submit'}
            name={'submit'}
            value={'Submit'}
            ref={this.submit}
            isDisabled={this.state.isSubmitButtonDisabled}
          />
        </div>
      </form>
    );
  }
}

export default Form;
