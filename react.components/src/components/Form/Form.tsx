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
  private readonly submit = React.createRef<HTMLInputElement>();

  constructor(props: IFormProps) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();

    this.checkAll();

    if (this.isFormCorrect()) {
      this.createCard();
      alert('SUCCESS! The new card has been created!');
      this.formReference.current?.reset();
    } else {
      if (this.submit.current) this.submit.current.disabled = true;
    }
  }

  componentDidMount(): void {
    if (this.submit.current) this.submit.current.disabled = true;
  }

  isFirstNameCorrect() {
    const value = String(this.firstName.current?.getValue());
    return !/\d/.test(value) && /^.+$/.test(value);
  }
  isLastNameCorrect() {
    const value = String(this.firstName.current?.getValue());
    return !/\d/.test(value) && /^.+$/.test(value);
  }
  isZipCodeCorrect() {
    return /^\d{5}-\d{4}$/.test(String(this.zipCode.current?.getValue()));
  }
  isBirthdayCorrect() {
    const year = new Date().getFullYear();
    const month = (new Date().getMonth() + 1).toString().padStart(2, '0');
    const day = new Date().getDate().toString().padStart(2, '0');
    const currentDate = `${year}-${month}-${day}`;
    console.log(String(this.birthday.current?.getValue()), currentDate);
    return String(this.birthday.current?.getValue()) < currentDate;
  }
  isArrivingDateCorrect() {
    const year = new Date().getFullYear();
    const month = (new Date().getMonth() + 1).toString().padStart(2, '0');
    const day = new Date().getDate().toString().padStart(2, '0');
    const currentDate = `${year}-${month}-${day}`;
    return String(this.arrivingDate.current?.getValue()) > currentDate;
  }
  isCountryCorrect() {
    return !!String(this.country.current?.getValue()).trim();
  }
  isAgreementToProcConfDataCorrect() {
    return this.isAgreeToProcConfData.current?.isChecked();
  }
  isAgreementToGetAdvToEmail() {
    return this.isAgreeToGetAdvToEmail.current?.isChecked();
  }
  isGenderCorrect() {
    return !!this.gender.current?.getValue();
  }
  isProfilePictureCorrect() {
    return !!this.profilePicture.current?.getValue();
  }

  isFormCorrect() {
    return (
      this.isFirstNameCorrect() &&
      this.isLastNameCorrect() &&
      this.isZipCodeCorrect() &&
      this.isBirthdayCorrect() &&
      this.isArrivingDateCorrect() &&
      this.isCountryCorrect() &&
      this.isAgreementToProcConfDataCorrect() &&
      this.isAgreementToGetAdvToEmail() &&
      this.isGenderCorrect() &&
      this.isProfilePictureCorrect()
    );
  }

  checkFirstName() {
    if (this.isFirstNameCorrect()) {
      if (this.firstName.current) this.firstName.current.setStatus(true);
    } else {
      if (this.firstName.current) this.firstName.current.setStatus(false);
    }
  }
  checkLastName() {
    if (this.isLastNameCorrect()) {
      if (this.lastName.current) this.lastName.current.setStatus(true);
    } else {
      if (this.lastName.current) this.lastName.current.setStatus(false);
    }
  }
  checkZipCode() {
    if (this.isZipCodeCorrect()) {
      if (this.zipCode.current) this.zipCode.current.setStatus(true);
    } else {
      if (this.zipCode.current) this.zipCode.current.setStatus(false);
    }
  }
  checkBirthday() {
    if (this.isBirthdayCorrect()) {
      if (this.birthday.current) this.birthday.current.setStatus(true);
    } else {
      if (this.birthday.current) this.birthday.current.setStatus(false);
    }
  }
  checkArrivingDate() {
    if (this.isArrivingDateCorrect()) {
      if (this.arrivingDate.current) this.arrivingDate.current.setStatus(true);
    } else {
      if (this.arrivingDate.current) this.arrivingDate.current.setStatus(false);
    }
  }
  checkCountry() {
    if (this.isCountryCorrect()) {
      if (this.country.current) this.country.current.setStatus(true);
    } else {
      if (this.country.current) this.country.current.setStatus(false);
    }
  }
  checkAgreementToProcConfData() {
    if (this.isAgreementToProcConfDataCorrect()) {
      if (this.isAgreeToProcConfData.current) this.isAgreeToProcConfData.current.setStatus(true);
    } else {
      if (this.isAgreeToProcConfData.current) this.isAgreeToProcConfData.current.setStatus(false);
    }
  }
  checkAgreementToGetAdvToEmail() {
    if (this.isAgreementToGetAdvToEmail()) {
      if (this.isAgreeToGetAdvToEmail.current) this.isAgreeToGetAdvToEmail.current.setStatus(true);
    } else {
      if (this.isAgreeToGetAdvToEmail.current) this.isAgreeToGetAdvToEmail.current.setStatus(false);
    }
  }
  checkGender() {
    if (this.isGenderCorrect()) {
      if (this.gender.current) this.gender.current.setStatus(true);
    } else {
      if (this.gender.current) this.gender.current.setStatus(false);
    }
  }
  checkProfilePicture() {
    if (this.isProfilePictureCorrect()) {
      if (this.profilePicture.current) this.profilePicture.current.setStatus(true);
    } else {
      if (this.profilePicture.current) this.profilePicture.current.setStatus(false);
    }
  }

  checkAll() {
    this.checkFirstName();
    this.checkLastName();
    this.checkZipCode();
    this.checkBirthday();
    this.checkArrivingDate();
    this.checkCountry();
    this.checkAgreementToProcConfData();
    this.checkAgreementToGetAdvToEmail();
    this.checkGender();
    this.checkProfilePicture();
  }

  createCard() {
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

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={ItemStyles.Form} ref={this.formReference}>
        <div>
          <TextInput
            id={'firstName'}
            name={'firstName'}
            defaultValue={''}
            ref={this.firstName}
            formatInstruction={'ur name must include letters only & be > 0 symbols'}
            isCorrectFormat={true}
            label={'First Name: '}
            onChange={() => {
              if (this.submit.current) this.submit.current.disabled = false;
              if (this.firstName.current) this.firstName.current.setStatus(true);
            }}
          />
          <TextInput
            id={'lastName'}
            name={'lastName'}
            defaultValue={''}
            ref={this.lastName}
            formatInstruction={'ur surname must include letters only & be > 0 symbols'}
            isCorrectFormat={true}
            label={'Last Name: '}
            onChange={() => {
              if (this.submit.current) this.submit.current.disabled = false;
              if (this.lastName.current) this.lastName.current.setStatus(true);
            }}
          />
          <TextInput
            id={'zipCode'}
            name={'zipCode'}
            defaultValue={''}
            ref={this.zipCode}
            formatInstruction={'ur zip-code must correspond to format "XXXXX-YYYY"'}
            isCorrectFormat={true}
            label={'Zip-code: '}
            onChange={() => {
              if (this.submit.current) this.submit.current.disabled = false;
              if (this.zipCode.current) this.zipCode.current.setStatus(true);
            }}
          />
        </div>
        <div>
          <DateInput
            id={'birthday'}
            name={'birthday'}
            defaultValue={''}
            ref={this.birthday}
            formatInstruction={'select date < NOW'}
            isCorrectFormat={true}
            label={'birthday: '}
            onChange={() => {
              if (this.submit.current) this.submit.current.disabled = false;
              if (this.birthday.current) this.birthday.current.setStatus(true);
            }}
          />
          <DateInput
            id={'arrivingDate'}
            name={'arrivingDate'}
            defaultValue={''}
            ref={this.arrivingDate}
            formatInstruction={'select date > NOW'}
            isCorrectFormat={true}
            label={'arriving date: '}
            onChange={() => {
              if (this.submit.current) this.submit.current.disabled = false;
              if (this.arrivingDate.current) this.arrivingDate.current.setStatus(true);
            }}
          />
        </div>
        <div>
          <DropdownInput
            id={'country'}
            name={'country'}
            defaultValue={''}
            ref={this.country}
            formatInstruction={'u must pick some country'}
            isCorrectFormat={true}
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
            onChange={() => {
              if (this.submit.current) this.submit.current.disabled = false;
              if (this.country.current) this.country.current.setStatus(true);
            }}
          />
        </div>
        <div>
          <CheckboxInput
            id={'isAgreeToProcConfData'}
            name={'isAgreeToProcConfData'}
            defaultChecked={false}
            ref={this.isAgreeToProcConfData}
            formatInstruction={'must be checked'}
            isCorrectFormat={true}
            label={' - agree to processing my data'}
            onChange={() => {
              if (this.submit.current) this.submit.current.disabled = false;
              if (this.isAgreeToProcConfData.current)
                this.isAgreeToProcConfData.current.setStatus(true);
            }}
          />
          <CheckboxInput
            id={'isAgreeToGetAdvToEmail'}
            name={'isAgreeToGetAdvToEmail'}
            defaultChecked={false}
            ref={this.isAgreeToGetAdvToEmail}
            formatInstruction={'must be checked'}
            isCorrectFormat={true}
            label={' - receive advertisement'}
            onChange={() => {
              if (this.submit.current) this.submit.current.disabled = false;
              if (this.isAgreeToGetAdvToEmail.current)
                this.isAgreeToGetAdvToEmail.current.setStatus(true);
            }}
          />
        </div>
        <div>
          <SwitcherInput
            name={'gender'}
            formatInstruction={'u musk pick one of these'}
            isCorrectFormat={true}
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
            onChange={() => {
              if (this.submit.current) this.submit.current.disabled = false;
              if (this.gender.current) this.gender.current.setStatus(true);
            }}
          />
        </div>
        <div>
          <FileUploadInput
            id={'profilePicture'}
            name={'profilePicture'}
            defaultValue={''}
            ref={this.profilePicture}
            formatInstruction={'pick correct img'}
            isCorrectFormat={true}
            label={'profile picture: '}
            onChange={() => {
              if (this.submit.current) this.submit.current.disabled = false;
              if (this.profilePicture.current) this.profilePicture.current.setStatus(true);
            }}
          />
        </div>
        <div>
          <SubmitInput value={'Submit'} reference={this.submit} />
        </div>
      </form>
    );
  }
}

export default Form;
