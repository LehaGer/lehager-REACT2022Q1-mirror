import axios from 'axios';
import { ICharacterQueryAttributes } from '../types/interfaces';
import { API_SERVER_URL } from '../costants/constants';

export default class getAllCharacters {
  static async getAllCharacters(page = 1) {
    const response = await axios.get(`${API_SERVER_URL}/character`, {
      params: {
        page: page,
      },
      headers: {
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
        Expires: '0',
      },
    });

    return response?.data?.results || [];
  }

  static async getCharacterByAttributes(attributes: ICharacterQueryAttributes) {
    const response = await axios.get(`${API_SERVER_URL}/character`, {
      params: attributes,
      headers: {
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
        Expires: '0',
      },
    });

    return response?.data?.results || [];
  }

  static async getCharacterById(id: number) {
    const response = await axios.get(`${API_SERVER_URL}/character/${id}`, {
      headers: {
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
        Expires: '0',
      },
    });

    return response?.data?.results || [];
  }

  static async getMultipleCharactersById(arrayId: number[]) {
    const response = await axios.get(
      `${API_SERVER_URL}/character/[${arrayId.map((el) => `${el},`)}]`,
      {
        headers: {
          'Cache-Control': 'no-cache',
          Pragma: 'no-cache',
          Expires: '0',
        },
      }
    );

    return response?.data?.results || [];
  }
}
