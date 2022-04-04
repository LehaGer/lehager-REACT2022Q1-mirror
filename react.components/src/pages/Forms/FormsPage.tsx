import React from 'react';
import ItemStyles from './FormsPage.module.css';
import Form from '../../components/Form/Form';
import FormsCardSet from '../../components/FormsCardSet/FormsCardSet';
import { genderTypes } from '../../components/FormsCard/FormsCard';

const FormsPage: React.FC = () => {
  return (
    <div className={ItemStyles.Form} data-testid="formsPage">
      <Form />
      <FormsCardSet
        cardSetArray={[
          {
            id: '1',
            firstName: 'testFN',
            lastName: 'testLN',
            zipCode: 'someZip',
            birthday: '0000-00-00',
            arrivingDate: '0000-00-00',
            country: 'Belarus',
            isAgreeToProcConfData: true,
            isAgreeToGetAdvToEmail: true,
            gender: genderTypes.MALE,
            profilePicture: 'https://someURL.com/someImg.png',
          },
        ]}
      />
    </div>
  );
};

export default FormsPage;
