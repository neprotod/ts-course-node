import { IPerson } from './PersonTypes';

const storeData:IPerson[] = [];

export default class PersonService {
  async setPerson (data: IPerson): Promise<true> {
    storeData.push(data);

    return true;
  }
  async getAll (): Promise<IPerson[]> {
    return storeData;
  }
  async getOne (id: number): Promise<IPerson | {}> {
    const person = storeData.find((item) => {
      return item.id === id;
    });

    return person || {};
  }
} 