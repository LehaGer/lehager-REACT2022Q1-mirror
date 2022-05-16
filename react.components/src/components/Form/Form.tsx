import React, { FC, useContext, useEffect } from 'react';
import ItemStyles from './Form.module.css';
import TextInput from '../UI/Inputs/TextInput/TextInput';
import DateInput from '../UI/Inputs/DateInput/DateInput';
import DropdownInput from '../UI/Inputs/DropdownInput/DropdownInput';
import CheckboxInput from '../UI/Inputs/CheckboxInput/CheckboxInput';
import SwitcherInput from '../UI/Inputs/SwitcherInput/SwitcherInput';
import FileUploadInput from '../UI/Inputs/FileUploadInput/FileUploadInput';
import SubmitInput from '../UI/Inputs/SubmiInput/SubmitInput';
import { genderTypes, IFormProps } from '../../types/interfaces';
import { useForm } from 'react-hook-form';
import { FieldPath } from 'react-hook-form/dist/types/path';
import { AppContext } from '../../context/AppContext';
import { formFieldsReducerActionVariants } from '../../reducers/formFieldsReducer';

const Form: FC<IFormProps> = ({ addNewCard }) => {
  const { state, dispatch } = useContext(AppContext);

  const setIsSubmitButtonDisabled = (newBtnState: boolean) => {
    dispatch({
      type: formFieldsReducerActionVariants.SET_FORMS_FIELDS,
      payload: {
        ...state.formFields,
        isSubmitButtonDisabled: newBtnState,
      },
    });
  };

  type FormFields = {
    firstName: string;
    lastName: string;
    zipCode: string;
    birthday: string;
    arrivingDate: string;
    country: string;
    isAgreeToProcConfData: boolean;
    isAgreeToGetAdvToEmail: boolean;
    gender: string | null;
    profilePicture: FileList | null;
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
    clearErrors,
    reset,
  } = useForm<FormFields>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  useEffect(() => {
    reset({
      firstName: state.formFields.firstName.value,
      lastName: state.formFields.lastName.value,
      zipCode: state.formFields.zipCode.value,
      birthday: state.formFields.birthday.value,
      arrivingDate: state.formFields.arrivingDate.value,
      country: state.formFields.country.value,
      isAgreeToProcConfData: state.formFields.isAgreeToProcConfData.value,
      isAgreeToGetAdvToEmail: state.formFields.isAgreeToGetAdvToEmail.value,
      gender: state.formFields.gender.value,
      profilePicture: state.formFields.profilePicture.value,
    });

    if (state.formFields.firstName.hasError) {
      setError('firstName', {
        type: state.formFields.firstName.hasError?.type,
        message: state.formFields.firstName.hasError?.message,
      });
    }
    if (state.formFields.lastName.hasError) {
      setError('lastName', {
        type: state.formFields.lastName.hasError?.type,
        message: state.formFields.lastName.hasError?.message,
      });
    }
    if (state.formFields.zipCode.hasError) {
      setError('zipCode', {
        type: state.formFields.zipCode.hasError?.type,
        message: state.formFields.zipCode.hasError?.message,
      });
    }
    if (state.formFields.birthday.hasError) {
      setError('birthday', {
        type: state.formFields.birthday.hasError?.type,
        message: state.formFields.birthday.hasError?.message,
      });
    }
    if (state.formFields.arrivingDate.hasError) {
      setError('arrivingDate', {
        type: state.formFields.arrivingDate.hasError?.type,
        message: state.formFields.arrivingDate.hasError?.message,
      });
    }
    if (state.formFields.country.hasError) {
      setError('country', {
        type: state.formFields.country.hasError?.type,
        message: state.formFields.country.hasError?.message,
      });
    }
    if (state.formFields.isAgreeToProcConfData.hasError) {
      setError('isAgreeToProcConfData', {
        type: state.formFields.isAgreeToProcConfData.hasError?.type,
        message: state.formFields.isAgreeToProcConfData.hasError?.message,
      });
    }
    if (state.formFields.isAgreeToGetAdvToEmail.hasError) {
      setError('isAgreeToGetAdvToEmail', {
        type: state.formFields.isAgreeToGetAdvToEmail.hasError?.type,
        message: state.formFields.isAgreeToGetAdvToEmail.hasError?.message,
      });
    }
    if (state.formFields.gender.hasError) {
      setError('gender', {
        type: state.formFields.gender.hasError?.type,
        message: state.formFields.gender.hasError?.message,
      });
    }
    if (state.formFields.profilePicture.hasError) {
      setError('profilePicture', {
        type: state.formFields.profilePicture.hasError?.type,
        message: state.formFields.profilePicture.hasError?.message,
      });
    }

    console.log(state.formFields);
  }, []);

  useEffect(() => {
    const subscription = watch((data) => {
      dispatch({
        type: formFieldsReducerActionVariants.SET_FORMS_FIELDS,
        payload: {
          firstName: {
            ...state.formFields.firstName,
            value: data.firstName ?? '',
          },
          lastName: {
            ...state.formFields.lastName,
            value: data.lastName ?? '',
          },
          zipCode: {
            ...state.formFields.zipCode,
            value: data.zipCode ?? '',
          },
          birthday: {
            ...state.formFields.birthday,
            value: data.birthday ?? '',
          },
          arrivingDate: {
            ...state.formFields.arrivingDate,
            value: data.arrivingDate ?? '',
          },
          country: {
            ...state.formFields.country,
            value: data.country ?? '',
          },
          isAgreeToProcConfData: {
            ...state.formFields.isAgreeToProcConfData,
            value: data.isAgreeToProcConfData ?? false,
          },
          isAgreeToGetAdvToEmail: {
            ...state.formFields.isAgreeToGetAdvToEmail,
            value: data.isAgreeToGetAdvToEmail ?? false,
          },
          gender: {
            ...state.formFields.gender,
            value: data.gender as genderTypes,
          },
          profilePicture: {
            ...state.formFields.profilePicture,
            value: (data.profilePicture ?? []) as FileList,
          },
          isSubmitButtonDisabled: false,
        },
      });
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  useEffect(() => {
    console.log('errors-2', errors);
    dispatch({
      type: formFieldsReducerActionVariants.SET_FORMS_FIELDS,
      payload: {
        firstName: {
          ...state.formFields.firstName,
          hasError: errors.firstName,
        },
        lastName: {
          ...state.formFields.lastName,
          hasError: errors.lastName,
        },
        zipCode: {
          ...state.formFields.zipCode,
          hasError: errors.zipCode,
        },
        birthday: {
          ...state.formFields.birthday,
          hasError: errors.birthday,
        },
        arrivingDate: {
          ...state.formFields.arrivingDate,
          hasError: errors.arrivingDate,
        },
        country: {
          ...state.formFields.country,
          hasError: errors.country,
        },
        isAgreeToProcConfData: {
          ...state.formFields.isAgreeToProcConfData,
          hasError: errors.isAgreeToProcConfData,
        },
        isAgreeToGetAdvToEmail: {
          ...state.formFields.isAgreeToGetAdvToEmail,
          hasError: errors.isAgreeToGetAdvToEmail,
        },
        gender: {
          ...state.formFields.gender,
          hasError: errors.gender,
        },
        profilePicture: {
          ...state.formFields.profilePicture,
          hasError: errors.profilePicture,
        },
        isSubmitButtonDisabled: state.formFields.isSubmitButtonDisabled,
      },
    });
  }, [
    errors.firstName,
    errors.lastName,
    errors.zipCode,
    errors.birthday,
    errors.arrivingDate,
    errors.country,
    errors.isAgreeToProcConfData,
    errors.isAgreeToGetAdvToEmail,
    errors.gender,
    errors.profilePicture,
  ]);

  const createCard = (data: FormFields): void => {
    if (addNewCard) {
      addNewCard({
        arrivingDate: data.arrivingDate,
        birthday: data.birthday,
        country: data.country,
        firstName: data.firstName,
        gender: data.gender as genderTypes,
        isAgreeToGetAdvToEmail: data.isAgreeToGetAdvToEmail,
        isAgreeToProcConfData: data.isAgreeToProcConfData,
        lastName: data.lastName,
        profilePicture: data.profilePicture?.[0]
          ? URL.createObjectURL(data.profilePicture?.[0])
          : '',
        zipCode: data.zipCode,
      });
    }
  };

  const onSubmit = handleSubmit(
    (data) => {
      createCard(data);
      setIsSubmitButtonDisabled(true);
      reset();
      alert('SUCCESS! The new card has been created!');
    },
    (errors, e) => {
      setIsSubmitButtonDisabled(true);
    }
  );

  const check = {
    isFirstNameCorrect: (data: string) => {
      return (
        (!/\d/.test(data) && /^.+$/.test(data)) ||
        'ur name must include letters only & be > 0 symbols'
      );
    },
    isLastNameCorrect: (data: string) => {
      return (
        (!/\d/.test(data) && /^.+$/.test(data)) ||
        'ur surname must include letters only & be > 0 symbols'
      );
    },
    isZipCodeCorrect: (data: string) => {
      return /^\d{5}-\d{4}$/.test(data) || 'ur zip-code must correspond to format "XXXXX-YYYY"';
    },
    isBirthdayCorrect: (data: string) => {
      if (!data) return 'select date < NOW';
      const year = new Date().getFullYear();
      const month = (new Date().getMonth() + 1).toString().padStart(2, '0');
      const day = new Date().getDate().toString().padStart(2, '0');
      const currentDate = `${year}-${month}-${day}`;
      return String(data) < currentDate || 'select date < NOW';
    },
    isArrivingDateCorrect: (data: string) => {
      if (!data) return 'select date > NOW';
      const year = new Date().getFullYear();
      const month = (new Date().getMonth() + 1).toString().padStart(2, '0');
      const day = new Date().getDate().toString().padStart(2, '0');
      const currentDate = `${year}-${month}-${day}`;
      return String(data) > currentDate || 'select date > NOW';
    },
    isCountryCorrect: (data: string) => {
      return !!String(data).trim() || 'u must pick some country';
    },
    isAgreementToProcConfDataCorrect: (data: boolean) => {
      return data || 'must be checked';
    },
    isAgreementToGetAdvToEmail: (data: boolean) => {
      return data || 'must be checked';
    },
    isGenderCorrect: (data: string) => {
      return !!data || 'u musk pick one of these';
    },
    isProfilePictureCorrect: (data: string) => {
      return !!data?.length || 'pick correct img';
    },
  };
  const onFieldChange = (name: FieldPath<FormFields>) => {
    clearErrors(name);
  };

  return (
    <form onSubmit={onSubmit} className={ItemStyles.Form} data-testid="Form">
      <div>
        <TextInput
          id={'firstName'}
          name={'firstName'}
          label={'First Name: '}
          register={register}
          rules={{
            validate: check.isFirstNameCorrect,
            onChange: () => onFieldChange('firstName'),
          }}
          errors={errors}
          data-testid="FirstNameTextInput"
        />
        <TextInput
          id={'lastName'}
          name={'lastName'}
          label={'Last Name: '}
          register={register}
          rules={{
            validate: check.isLastNameCorrect,
            onChange: () => onFieldChange('lastName'),
          }}
          errors={errors}
          data-testid="LastNameTextInput"
        />
        <TextInput
          id={'zipCode'}
          name={'zipCode'}
          label={'Zip-code: '}
          register={register}
          rules={{
            validate: check.isZipCodeCorrect,
            onChange: () => onFieldChange('zipCode'),
          }}
          errors={errors}
          data-testid="ZipCodeTextInput"
        />
      </div>
      <div>
        <DateInput
          id={'birthday'}
          name={'birthday'}
          label={'birthday: '}
          register={register}
          rules={{
            validate: check.isBirthdayCorrect,
            onChange: () => onFieldChange('birthday'),
          }}
          errors={errors}
          data-testid="BirthdayDateInput"
        />
        <DateInput
          id={'arrivingDate'}
          name={'arrivingDate'}
          label={'arriving date: '}
          register={register}
          rules={{
            validate: check.isArrivingDateCorrect,
            onChange: () => onFieldChange('arrivingDate'),
          }}
          errors={errors}
          data-testid="arrivingDateInput"
        />
      </div>
      <div>
        <DropdownInput
          id={'country'}
          name={'country'}
          label={'country:'}
          options={[
            'Åland check.islands',
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
          register={register}
          rules={{
            validate: check.isCountryCorrect,
            onChange: () => onFieldChange('country'),
          }}
          errors={errors}
          data-testid="CountryDropdownInput"
        />
      </div>
      <div>
        <CheckboxInput
          id={'isAgreeToProcConfData'}
          name={'isAgreeToProcConfData'}
          label={' - agree to processing my data'}
          register={register}
          rules={{
            validate: check.isAgreementToProcConfDataCorrect,
            onChange: () => onFieldChange('isAgreeToProcConfData'),
          }}
          errors={errors}
          data-testid="AgreementProcessDataCheckboxInput"
        />
        <CheckboxInput
          id={'isAgreeToGetAdvToEmail'}
          name={'isAgreeToGetAdvToEmail'}
          label={' - receive advertisement'}
          register={register}
          rules={{
            validate: check.isAgreementToGetAdvToEmail,
            onChange: () => onFieldChange('isAgreeToGetAdvToEmail'),
          }}
          errors={errors}
          data-testid="AgreementGetAdvCheckboxInput"
        />
      </div>
      <div>
        <SwitcherInput
          name={'gender'}
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
          register={register}
          rules={{
            validate: check.isGenderCorrect,
            onChange: () => onFieldChange('gender'),
          }}
          errors={errors}
          data-testid="genderSwitcherInput"
        />
      </div>
      <div>
        <FileUploadInput
          id={'profilePicture'}
          name={'profilePicture'}
          label={'profile picture:'}
          register={register}
          rules={{
            validate: check.isProfilePictureCorrect,
            onChange: () => onFieldChange('profilePicture'),
          }}
          errors={errors}
        />
      </div>
      <div>
        <SubmitInput
          id={'submit'}
          name={'submit'}
          value={'Submit'}
          isDisabled={state.formFields.isSubmitButtonDisabled}
        />
      </div>
    </form>
  );
};

export default Form;
