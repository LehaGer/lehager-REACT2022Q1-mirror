import React, { FC, useEffect } from 'react';
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
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { formFieldsSlice } from '../../store/reducers/formFieldsSlice';

const Form: FC<IFormProps> = ({ addNewCard }) => {
  const dispatch = useAppDispatch();
  const formFields = useAppSelector((state) => state.formFieldsReducer);
  const { setFormsFields } = formFieldsSlice.actions;

  const setIsSubmitButtonDisabled = (newBtnState: boolean) => {
    dispatch(setFormsFields({ ...formFields, isSubmitButtonDisabled: newBtnState }));
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
      firstName: formFields.firstName.value,
      lastName: formFields.lastName.value,
      zipCode: formFields.zipCode.value,
      birthday: formFields.birthday.value,
      arrivingDate: formFields.arrivingDate.value,
      country: formFields.country.value,
      isAgreeToProcConfData: formFields.isAgreeToProcConfData.value,
      isAgreeToGetAdvToEmail: formFields.isAgreeToGetAdvToEmail.value,
      gender: formFields.gender.value,
      profilePicture: formFields.profilePicture.value,
    });

    if (formFields.firstName.hasError) {
      setError('firstName', {
        type: formFields.firstName.hasError?.type,
        message: formFields.firstName.hasError?.message,
      });
    }
    if (formFields.lastName.hasError) {
      setError('lastName', {
        type: formFields.lastName.hasError?.type,
        message: formFields.lastName.hasError?.message,
      });
    }
    if (formFields.zipCode.hasError) {
      setError('zipCode', {
        type: formFields.zipCode.hasError?.type,
        message: formFields.zipCode.hasError?.message,
      });
    }
    if (formFields.birthday.hasError) {
      setError('birthday', {
        type: formFields.birthday.hasError?.type,
        message: formFields.birthday.hasError?.message,
      });
    }
    if (formFields.arrivingDate.hasError) {
      setError('arrivingDate', {
        type: formFields.arrivingDate.hasError?.type,
        message: formFields.arrivingDate.hasError?.message,
      });
    }
    if (formFields.country.hasError) {
      setError('country', {
        type: formFields.country.hasError?.type,
        message: formFields.country.hasError?.message,
      });
    }
    if (formFields.isAgreeToProcConfData.hasError) {
      setError('isAgreeToProcConfData', {
        type: formFields.isAgreeToProcConfData.hasError?.type,
        message: formFields.isAgreeToProcConfData.hasError?.message,
      });
    }
    if (formFields.isAgreeToGetAdvToEmail.hasError) {
      setError('isAgreeToGetAdvToEmail', {
        type: formFields.isAgreeToGetAdvToEmail.hasError?.type,
        message: formFields.isAgreeToGetAdvToEmail.hasError?.message,
      });
    }
    if (formFields.gender.hasError) {
      setError('gender', {
        type: formFields.gender.hasError?.type,
        message: formFields.gender.hasError?.message,
      });
    }
    if (formFields.profilePicture.hasError) {
      setError('profilePicture', {
        type: formFields.profilePicture.hasError?.type,
        message: formFields.profilePicture.hasError?.message,
      });
    }
  }, []);

  useEffect(() => {
    const subscription = watch((data) => {
      dispatch(
        setFormsFields({
          firstName: {
            ...formFields.firstName,
            value: data.firstName ?? '',
          },
          lastName: {
            ...formFields.lastName,
            value: data.lastName ?? '',
          },
          zipCode: {
            ...formFields.zipCode,
            value: data.zipCode ?? '',
          },
          birthday: {
            ...formFields.birthday,
            value: data.birthday ?? '',
          },
          arrivingDate: {
            ...formFields.arrivingDate,
            value: data.arrivingDate ?? '',
          },
          country: {
            ...formFields.country,
            value: data.country ?? '',
          },
          isAgreeToProcConfData: {
            ...formFields.isAgreeToProcConfData,
            value: data.isAgreeToProcConfData ?? false,
          },
          isAgreeToGetAdvToEmail: {
            ...formFields.isAgreeToGetAdvToEmail,
            value: data.isAgreeToGetAdvToEmail ?? false,
          },
          gender: {
            ...formFields.gender,
            value: data.gender as genderTypes,
          },
          profilePicture: {
            ...formFields.profilePicture,
            value: (data.profilePicture ?? []) as FileList,
          },
          isSubmitButtonDisabled: false,
        })
      );
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  useEffect(() => {
    dispatch(
      setFormsFields({
        firstName: {
          ...formFields.firstName,
          hasError: errors.firstName,
        },
        lastName: {
          ...formFields.lastName,
          hasError: errors.lastName,
        },
        zipCode: {
          ...formFields.zipCode,
          hasError: errors.zipCode,
        },
        birthday: {
          ...formFields.birthday,
          hasError: errors.birthday,
        },
        arrivingDate: {
          ...formFields.arrivingDate,
          hasError: errors.arrivingDate,
        },
        country: {
          ...formFields.country,
          hasError: errors.country,
        },
        isAgreeToProcConfData: {
          ...formFields.isAgreeToProcConfData,
          hasError: errors.isAgreeToProcConfData,
        },
        isAgreeToGetAdvToEmail: {
          ...formFields.isAgreeToGetAdvToEmail,
          hasError: errors.isAgreeToGetAdvToEmail,
        },
        gender: {
          ...formFields.gender,
          hasError: errors.gender,
        },
        profilePicture: {
          ...formFields.profilePicture,
          hasError: errors.profilePicture,
        },
        isSubmitButtonDisabled: formFields.isSubmitButtonDisabled,
      })
    );
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
          isDisabled={formFields.isSubmitButtonDisabled}
        />
      </div>
    </form>
  );
};

export default Form;
