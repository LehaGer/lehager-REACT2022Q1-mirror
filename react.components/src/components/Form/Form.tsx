import React from 'react';
import ItemStyles from './Form.module.css';

interface IFormProps {
  name?: string;
}

interface IFormState {
  name?: string;
}

class Form extends React.Component<IFormProps, IFormState> {
  private fromReference = React.createRef<HTMLFormElement>();

  constructor(props: IFormProps) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.fromReference = React.createRef();
  }

  handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();

    /*alert('firstNameInput: ' + this.firstNameInput.current?.value);
    alert('lastNameInput: ' + this.lastNameInput.current?.value);*/
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={ItemStyles.Form} ref={this.fromReference}>
        <div>
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input type="text" defaultValue="" id="firstName" name="firstName" />
          </div>
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" defaultValue="" id="lastName" name="lastName" />
          </div>
          <div>
            <label htmlFor="zipCode">Zip code:</label>
            <input type="text" defaultValue="" id="zipCode" name="zipCode" />
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="birthday">birthday:</label>
            <input type="date" defaultValue="" name="birthday" id="birthday" />
          </div>
          <div>
            <label htmlFor="arrivingDate">arriving date:</label>
            <input type="date" defaultValue="" name="arrivingDate" id="arrivingDate" />
          </div>
        </div>
        <div>
          <label htmlFor="country">country:</label>
          <select name="country" id="country">
            <option value="Åland Islands">Åland Islands</option>
            <option value="Belarus">Belarus</option>
            <option value="Canada">Canada</option>
            <option value="El Salvador">El Salvador</option>
            <option value="France">France</option>
            <option value="Gambia">Gambia</option>
            <option value="Honduras">Honduras</option>
            <option value="Ireland">Ireland</option>
            <option value="Japan">Japan</option>
            <option value="Kazakhstan">Kazakhstan</option>
            <option value="Latvia">Latvia</option>
            <option value="Macao">Macao</option>
          </select>
        </div>
        <div>
          <div>
            <input
              type="checkbox"
              defaultValue=""
              id="isAgreeToProcConfData"
              name="isAgreeToProcConfData"
            />
            <label htmlFor="isAgreeToProcConfData">agree to processing my data</label>
          </div>
          <div>
            <input
              type="checkbox"
              defaultValue=""
              id="isAgreeToGetAdvToEmail"
              name="isAgreeToGetAdvToEmail"
            />
            <label htmlFor="isAgreeToGetAdvToEmail">receive advertisement</label>
          </div>
        </div>
        <div>
          <div>
            <input type="radio" name="gender" id="male" value="male" />
            <label htmlFor="male">Male</label>
          </div>
          <div>
            <input type="radio" name="gender" id="female" value="female" />
            <label htmlFor="female">Female</label>
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="profilePicture">profile picture</label>
            <input type="file" defaultValue="" id="profilePicture" name="profilePicture" />
          </div>
        </div>
        <div>
          <input type="submit" value="Создать запись" />
        </div>
      </form>
    );
  }
}

export default Form;
