import React, { useContext, useEffect } from 'react';
import DropdownInput from '../UI/Inputs/DropdownInput/DropdownInput';
import ItemStyles from './CardFilter.module.css';
import { useForm } from 'react-hook-form';
import { AppContext } from '../../context/AppContext';
import { cardFilterReducerActionVariants } from '../../reducers/cardFilterReducer';
import { characterQueryGender, characterStatus } from '../../types/interfaces';
import { paginationReducerActionVariants } from '../../reducers/paginationReducer';

const CardFilter = () => {
  const { state, dispatch } = useContext(AppContext);

  type FormFields = {
    characterStatus: characterStatus;
    characterGender: characterQueryGender;
    characterSpecies: string;
    cardsAmount: string;
  };

  const {
    register,
    watch,
    formState: { errors },
    reset,
  } = useForm<FormFields>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  useEffect(() => {
    reset({
      characterStatus: state.cardFilter.status,
      characterGender: state.cardFilter.gender,
      characterSpecies: state.cardFilter.species,
      cardsAmount: state.pagination.pageCapacity?.toString(),
    });
  }, []);

  useEffect(() => {
    const subscription = watch((data) => {
      dispatch({
        type: cardFilterReducerActionVariants.SET_CHARACTER_STATUS,
        payload: { status: data.characterStatus },
      });
      dispatch({
        type: cardFilterReducerActionVariants.SET_CHARACTER_GENDER,
        payload: { gender: data.characterGender },
      });
      dispatch({
        type: cardFilterReducerActionVariants.SET_CHARACTER_SPECIES,
        payload: { species: data.characterSpecies },
      });
      dispatch({
        type: paginationReducerActionVariants.SET_PAGE_CAPACITY,
        payload: { pageCapacity: Number.parseInt(data.cardsAmount || '') },
      });
      dispatch({
        type: paginationReducerActionVariants.SET_CURRENT_PAGE,
        payload: { pageCapacity: Number.parseInt(data.cardsAmount || ''), currentPage: 1 },
      });
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <div className={ItemStyles.cardFilter}>
      <DropdownInput
        id={'characterStatus'}
        label={'status: '}
        name={'characterStatus'}
        options={[characterStatus.Alive, characterStatus.Dead, characterStatus.unknown]}
        register={register}
        rules={{}}
        errors={errors}
      />
      <DropdownInput
        id={'characterGender'}
        label={'gender: '}
        name={'characterGender'}
        options={[
          characterQueryGender.genderless,
          characterQueryGender.female,
          characterQueryGender.male,
          characterQueryGender.unknown,
        ]}
        register={register}
        rules={{}}
        errors={errors}
      />
      <DropdownInput
        id={'characterSpecies'}
        label={'species: '}
        name={'characterSpecies'}
        options={['Human', 'Humanoid', 'Alien', 'unknown']}
        register={register}
        rules={{}}
        errors={errors}
      />
      <DropdownInput
        id={'cardsAmount'}
        label={'Cards amount on page: '}
        name={'cardsAmount'}
        options={['5', '10', '15', '20']}
        register={register}
        rules={{}}
        errors={errors}
      />
    </div>
  );
};

export default CardFilter;
