import axios from 'axios';
import { ICharacterQueryAttributes } from '../types/interfaces';

export default class getAllCharacters {
  static async getAllCharacters(page = 1) {
    return await axios.get('https://rickandmortyapi.com/api/character', {
      params: {
        page: page,
      },
    });
  }

  static async getCharacterByAttributes(attributes: ICharacterQueryAttributes) {
    return await axios.get('https://rickandmortyapi.com/api/character', {
      params: attributes,
    });
  }

  static async getCharacterById(id: number) {
    return await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
  }

  static async getMultipleCharactersById(arrayId: number[]) {
    return await axios.get(
      `https://rickandmortyapi.com/api/character/[${arrayId.map((el) => `${el},`)}]`
    );
  }
}
