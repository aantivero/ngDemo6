import { SpyObject } from './helper';
import { BuscarService } from '../buscar.service';
import Spy = jasmine.Spy;

export class MockBuscarService extends SpyObject {

  getAllSpy: Spy;
  getByIdSpy: Spy;
  searchSpy: Spy;
  saveSpy: Spy;
  fakeResponse: any;

  constructor() {
    super( BuscarService );
    this.fakeResponse = null;
    this.getAllSpy = this.spy('getAll').andReturn(this);
    this.getByIdSpy = this.spy('get').andReturn(this);
    this.searchSpy = this.spy('search').andReturn(this);
  }

  subscribe(callback: any) {
    callback(this.fakeResponse);
  }

  setResponse(json: any): void {
    this.fakeResponse = json;
  }
}
