import axios, { AxiosError } from 'axios';
import { ICharacterQueryAttributes, IPagination } from '../types/interfaces';
import { API_SERVER_URL } from '../costants/constants';
import { createAsyncThunk } from '@reduxjs/toolkit';

export default class CharacterService {
  static getAllCharacters = createAsyncThunk(
    'characterCards/getAllCharacters',
    async (_, { rejectWithValue }) => {
      try {
        const response = await axios.get(`${API_SERVER_URL}/character`, {
          headers: {
            'Cache-Control': 'no-cache',
            Pragma: 'no-cache',
            Expires: '0',
          },
        });
        return response?.data;
      } catch (error) {
        return rejectWithValue((error as AxiosError).message);
      }
    }
  );

  static getCharacterByAttributes = createAsyncThunk(
    'characterCards/getCharacterByAttributes',
    async (
      { currentPage, pageCapacity, ...attributes }: ICharacterQueryAttributes & IPagination,
      { rejectWithValue }
    ) => {
      const firstElemNum = pageCapacity * currentPage - pageCapacity;
      const lastElemNum = pageCapacity * currentPage;

      const APIFirstElemPage = Math.ceil((firstElemNum + 1) / 20);
      const APILastElemPage = Math.ceil(lastElemNum / 20);

      if (APIFirstElemPage === APILastElemPage) {
        let response;
        try {
          response = await axios.get(`${API_SERVER_URL}/character`, {
            params: { ...attributes, page: APIFirstElemPage },
            headers: {
              'Cache-Control': 'no-cache',
              Pragma: 'no-cache',
              Expires: '0',
            },
          });
        } catch (error) {
          return rejectWithValue((error as AxiosError).message);
        }

        const { info: navigationInfoFromAPI, results: dataSetFormAPI } = response.data;

        const sliceStart = firstElemNum % 20;
        const sliceEnd = lastElemNum % 20 || 20;

        return {
          info: navigationInfoFromAPI,
          results: dataSetFormAPI.slice(sliceStart, sliceEnd),
        };
      } else {
        let response;

        try {
          response = await axios.get(`${API_SERVER_URL}/character`, {
            params: { ...attributes, page: APIFirstElemPage },
            headers: {
              'Cache-Control': 'no-cache',
              Pragma: 'no-cache',
              Expires: '0',
            },
          });
        } catch (error) {
          return rejectWithValue((error as AxiosError).message);
        }
        const { results: dataSetFormApiStart } = response.data;

        try {
          response = await axios.get(`${API_SERVER_URL}/character`, {
            params: { ...attributes, page: APILastElemPage },
            headers: {
              'Cache-Control': 'no-cache',
              Pragma: 'no-cache',
              Expires: '0',
            },
          });
        } catch (error) {
          return rejectWithValue((error as AxiosError).message);
        }
        const { info: navigationInfoFromApiEnd, results: dataSetFormApiEnd } = response.data;

        const sliceStart = firstElemNum % 20;
        const sliceEnd = lastElemNum % 20;
        const dataSetSlicedStart = dataSetFormApiStart.slice(sliceStart, 20);
        const dataSetSlicedEnd = dataSetFormApiEnd.slice(0, sliceEnd);
        const dataSetFormAPI = dataSetSlicedStart.concat(dataSetSlicedEnd);

        return {
          info: navigationInfoFromApiEnd,
          results: dataSetFormAPI,
        };
      }
    }
  );
}
