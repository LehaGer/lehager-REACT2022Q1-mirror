import axios, { AxiosResponse } from 'axios';
import { ICharacterInfo, ICharacterQueryAttributes } from '../types/interfaces';
import { API_SERVER_URL } from '../costants/constants';

export default class getAllCharacters {
  static async getAllCharacters(page = 1): Promise<ICharacterInfo[]> {
    let response: AxiosResponse | null;
    try {
      response = await axios.get(`${API_SERVER_URL}/character`, {
        params: {
          page: page,
        },
        headers: {
          'Cache-Control': 'no-cache',
          Pragma: 'no-cache',
          Expires: '0',
        },
      });
    } catch {
      response = null;
    }

    return response?.data?.results || [];
  }

  static async getCharacterByAttributes(
    attributes: ICharacterQueryAttributes
  ): Promise<ICharacterInfo[]> {
    let response: AxiosResponse | null;
    try {
      response = await axios.get(`${API_SERVER_URL}/character`, {
        params: attributes,
        headers: {
          'Cache-Control': 'no-cache',
          Pragma: 'no-cache',
          Expires: '0',
        },
      });
    } catch {
      response = null;
    }

    return response?.data?.results || [];
  }

  static async getCharacterById(id: number): Promise<ICharacterInfo> {
    let response: AxiosResponse | null;
    try {
      response = await axios.get(`${API_SERVER_URL}/character/${id}`, {
        headers: {
          'Cache-Control': 'no-cache',
          Pragma: 'no-cache',
          Expires: '0',
        },
      });
    } catch {
      response = null;
    }

    return response?.data || null;
  }

  static async getMultipleCharactersById(arrayId: number[]): Promise<ICharacterInfo[]> {
    let response: AxiosResponse | null;
    try {
      response = await axios.get(`${API_SERVER_URL}/character/[${arrayId.map((el) => `${el},`)}]`, {
        headers: {
          'Cache-Control': 'no-cache',
          Pragma: 'no-cache',
          Expires: '0',
        },
      });
    } catch {
      response = null;
    }

    return response?.data?.results || [];
  }
}
