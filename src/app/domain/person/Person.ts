import { JsonController, Get, Post, Body, Param } from 'routing-controllers';
import { App } from '../../../infra/App';
import PersonService from './PersonService';

import { IPerson } from './PersonTypes';

@JsonController('/person')
export default class Person {
  public app = new App();
  public service = new PersonService();

  @Get()
  async getAll () {
    return this.service.getAll();
  }

  @Get('/:id')
  async getOne (@Param('id') id: number) {
    return this.service.getOne(id);
  }

  @Post()
  async setPerson (@Body() body: IPerson) {
    await this.service.setPerson(body);

    return 'Person added';
  }
}