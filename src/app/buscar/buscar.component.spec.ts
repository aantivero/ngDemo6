import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarComponent } from './buscar.component';
import {MockBuscarService} from '../shared/buscar/mocks/buscar.service';
import {MockActivatedRoute, MockRouter} from '../shared/buscar/mocks/routes';
import {BuscarService} from '../shared/buscar/buscar.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';

describe('BuscarComponent', () => {
  let component: BuscarComponent;
  let fixture: ComponentFixture<BuscarComponent>;
  let mockBuscarService: MockBuscarService;
  let mockActivatedRoute: MockActivatedRoute;
  let mockRouter: MockRouter;

  beforeEach(async(() => {
    mockBuscarService = new MockBuscarService();
    mockActivatedRoute = new MockActivatedRoute({'term': 'lee'});
    mockRouter = new MockRouter();

    TestBed.configureTestingModule({
      declarations: [ BuscarComponent ],
      providers: [
        {provide: BuscarService, useValue: mockBuscarService},
        {provide: ActivatedRoute, useValue: mockActivatedRoute},
        {provide: Router, value: mockRouter}
      ],
      imports: [FormsModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crearse', () => {
    expect(component).toBeTruthy();
  });

  it('deberia buscar cuando term es seteado y search() es llamado', () => {
    component = fixture.debugElement.componentInstance;
    component.query = 'M';
    component.buscar();
    expect(mockBuscarService.searchSpy).toHaveBeenCalledWith('M');
  });

  it('debería buscar automaticamente cuando el term se encuentra en la URL', () => {
    fixture.detectChanges();
    expect(mockBuscarService.searchSpy).toHaveBeenCalledWith('lee');
  });
});
