import { TestBed, inject, getTestBed } from '@angular/core/testing';
import { BuscarService } from './buscar.service';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('BuscarService', () => {
  let injector: TestBed;
  let service: BuscarService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BuscarService]
    });

    injector = getTestBed();
    service = injector.get(BuscarService);
    httpMock = injector.get(HttpTestingController);
  });

  it('debería devolver todos ', () => {
    const dummyData = [
      {name: 'Elon Musk'},
      {name: 'Jack Ma'}
    ];
    service.getAll().subscribe((people: any) => {
      expect(people.length).toBe(2);
      expect(people[0].name).toBe('Elon Musk');
      expect(people).toEqual(dummyData);
    });

    const req = httpMock.expectOne('assets/data/persona.json');
    expect(req.request.method).toBe('GET');
    req.flush(dummyData);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('debería crearse el servicio', () => {
    expect(service).toBeTruthy();
  });
});
