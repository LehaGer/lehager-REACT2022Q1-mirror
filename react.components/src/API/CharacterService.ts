import axios from 'axios';
import { ICharacterQueryAttributes } from '../types/interfaces';

export default class getAllCharacters {
  static async getAllCharacters(page = 1) {
    return await axios.get('https://rickandmortyapi.com/api/character', {
      params: {
        page: page,
      },
      headers: {
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
        Expires: '0',
      },
    });
  }

  static async getCharacterByAttributes(attributes: ICharacterQueryAttributes) {
    return await axios.get('https://rickandmortyapi.com/api/character', {
      params: attributes,
      headers: {
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
        Expires: '0',
      },
    });
  }

  static async getCharacterById(id: number) {
    return await axios.get(`https://rickandmortyapi.com/api/character/${id}`, {
      headers: {
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
        Expires: '0',
      },
    });
  }

  static async getMultipleCharactersById(arrayId: number[]) {
    return await axios.get(
      `https://rickandmortyapi.com/api/character/[${arrayId.map((el) => `${el},`)}]`,
      {
        headers: {
          'Cache-Control': 'no-cache',
          Pragma: 'no-cache',
          Expires: '0',
        },
      }
    );
  }
}
