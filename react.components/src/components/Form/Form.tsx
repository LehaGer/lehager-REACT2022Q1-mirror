import React from 'react';
import ItemStyles from './Form.module.css';
import TextInput from '../UI/Inputs/TextInput/TextInput';
import DateInput from '../UI/Inputs/DateInput/DateInput';
import DropdownInput from '../UI/Inputs/DropdownInput/DropdownInput';
import CheckboxInput from '../UI/Inputs/CheckboxInput/CheckboxInput';
import SwitcherInput from '../UI/Inputs/SwitcherInput/SwitcherInput';
import FileUploadInput from '../UI/Inputs/FileUploadInput/FileUploadInput';
import SubmitInput from '../UI/Inputs/SubmiInput/SubmitInput';

interface IFormProps {
  name?: string;
}

interface IFormState {
  name?: string;
}

class Form extends React.Component<IFormProps, IFormState> {
  private readonly formReference = React.createRef<HTMLFormElement>();
  private readonly firstName = React.createRef<HTMLInputElement>();
  private readonly lastName = React.createRef<HTMLInputElement>();
  private readonly zipCode = React.createRef<HTMLInputElement>();
  private readonly birthday = React.createRef<HTMLInputElement>();
  private readonly arrivingDate = React.createRef<HTMLInputElement>();
  private readonly country = React.createRef<HTMLSelectElement>();
  private readonly isAgreeToProcConfData = React.createRef<HTMLInputElement>();
  private readonly isAgreeToGetAdvToEmail = React.createRef<HTMLInputElement>();
  private readonly genderMale = React.createRef<HTMLInputElement>();
  private readonly genderFemale = React.createRef<HTMLInputElement>();
  private readonly profilePicture = React.createRef<HTMLInputElement>();

  constructor(props: IFormProps) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {};
  }

  handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();

    alert('firstName: ' + this.firstName.current?.value);
    alert('lastName: ' + this.lastName.current?.value);
    alert('zipCode: ' + this.zipCode.current?.value);
    alert('birthday: ' + this.birthday.current?.value);
    alert('arrivingDate: ' + this.arrivingDate.current?.value);
    alert('country: ' + this.country.current?.value);
    alert('isAgreeToProcConfData: ' + this.isAgreeToProcConfData.current?.checked);
    alert('isAgreeToGetAdvToEmail: ' + this.isAgreeToGetAdvToEmail.current?.checked);
    alert(
      'gender: ' +
        ((this.genderMale.current?.checked ? this.genderMale.current?.value : false) ||
          (this.genderFemale.current?.checked ? this.genderFemale.current?.value : false) ||
          undefined)
    );
    alert('profilePicture: ' + this.profilePicture.current?.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={ItemStyles.Form} ref={this.formReference}>
        <div>
          <TextInput
            id={'firstName'}
            name={'firstName'}
            defaultValue={''}
            reference={this.firstName}
            formatInstruction={'ur name must include letters only'}
            isCorrectFormat={true}
            label={'First Name: '}
          />
          <TextInput
            id={'lastName'}
            name={'lastName'}
            defaultValue={''}
            reference={this.lastName}
            formatInstruction={'ur surname must include letters only'}
            isCorrectFormat={true}
            label={'Last Name: '}
          />
          <TextInput
            id={'zipCode'}
            name={'zipCode'}
            defaultValue={''}
            reference={this.zipCode}
            formatInstruction={'ur zip-code must include 6 symbols only'}
            isCorrectFormat={true}
            label={'Zip-code: '}
          />
        </div>
        <div>
          <DateInput
            id={'birthday'}
            name={'birthday'}
            defaultValue={''}
            reference={this.birthday}
            formatInstruction={'select date < NOW'}
            isCorrectFormat={true}
            label={'birthday: '}
          />
          <DateInput
            id={'arrivingDate'}
            name={'arrivingDate'}
            defaultValue={''}
            reference={this.arrivingDate}
            formatInstruction={'select date > NOW'}
            isCorrectFormat={true}
            label={'arriving date: '}
          />
        </div>
        <div>
          <DropdownInput
            id={'country'}
            name={'country'}
            defaultValue={''}
            reference={this.country}
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
          />
        </div>
        <div>
          <CheckboxInput
            id={'isAgreeToProcConfData'}
            name={'isAgreeToProcConfData'}
            defaultChecked={false}
            reference={this.isAgreeToProcConfData}
            formatInstruction={'must be checked'}
            isCorrectFormat={true}
            label={' - agree to processing my data'}
          />
          <CheckboxInput
            id={'isAgreeToGetAdvToEmail'}
            name={'isAgreeToGetAdvToEmail'}
            defaultChecked={false}
            reference={this.isAgreeToGetAdvToEmail}
            formatInstruction={'must be checked'}
            isCorrectFormat={true}
            label={' - receive advertisement'}
          />
        </div>
        <div>
          <SwitcherInput
            id={'male'}
            name={'gender'}
            defaultChecked={false}
            reference={this.genderMale}
            formatInstruction={'u musk pick one of these'}
            isCorrectFormat={true}
            label={' - Male'}
          />
          <SwitcherInput
            id={'female'}
            name={'gender'}
            defaultChecked={false}
            reference={this.genderFemale}
            formatInstruction={'u musk pick one of these'}
            isCorrectFormat={true}
            label={' - Female'}
          />
        </div>
        <div>
          <FileUploadInput
            id={'profilePicture'}
            name={'profilePicture'}
            defaultValue={''}
            reference={this.profilePicture}
            formatInstruction={'pick correct img'}
            isCorrectFormat={true}
            label={'profile picture: '}
          />
        </div>
        <div>
          <SubmitInput value={'Submit'} />
        </div>
      </form>
    );
  }
}

export default Form;
