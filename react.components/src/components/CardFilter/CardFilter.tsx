import React, { useEffect } from 'react';
import DropdownInput from '../UI/Inputs/DropdownInput/DropdownInput';
import ItemStyles from './CardFilter.module.css';
import { useForm } from 'react-hook-form';
import { characterQueryGender, characterStatus } from '../../types/interfaces';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { cardFilterSlice } from '../../store/reducers/cardFilterSlice';
import { paginationSlice } from '../../store/reducers/paginationSlice';

const CardFilter = () => {
  const cardFilter = useAppSelector((state) => state.cardFilterReducer);
  const pagination = useAppSelector((state) => state.paginationReducer);
  const { setCharacterGender, setCharacterStatus, setCharacterSpecies } = cardFilterSlice.actions;
  const { setPageCapacity, setCurrentPage } = paginationSlice.actions;
  const dispatch = useAppDispatch();

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
      characterStatus: cardFilter.status,
      characterGender: cardFilter.gender,
      characterSpecies: cardFilter.species,
      cardsAmount: pagination.pageCapacity?.toString(),
    });
  }, []);

  useEffect(() => {
    const subscription = watch((data) => {
      dispatch(setCharacterStatus(data.characterStatus));
      dispatch(setCharacterGender(data.characterGender));
      dispatch(setCharacterSpecies(data.characterSpecies));
      dispatch(setPageCapacity(Number.parseInt(data.cardsAmount || '')));
      dispatch(setCurrentPage(1));
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
