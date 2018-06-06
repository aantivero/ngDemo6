import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarComponent } from './editar.component';
import {MockBuscarService} from '../shared/buscar/mocks/buscar.service';
import {MockActivatedRoute, MockRouter} from '../shared/buscar/mocks/routes';
import {BuscarService} from '../shared/buscar/buscar.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material';

describe('EditarComponent', () => {
  let mockBuscarService: MockBuscarService;
  let mockActivatedRoute: MockActivatedRoute;
  let mockRouter: MockRouter;

  beforeEach(async(() => {
    mockBuscarService = new MockBuscarService();
    mockActivatedRoute = new MockActivatedRoute({'id': 1});
    mockRouter = new MockRouter();

    TestBed.configureTestingModule({
      declarations: [ EditarComponent ],
      providers: [
        {provide: BuscarService, useValue: mockBuscarService},
        {provide: ActivatedRoute, useValue: mockActivatedRoute},
        {provide: Router, useValue: mockRouter}
      ],
      imports: [FormsModule, BrowserAnimationsModule, MatInputModule]
    }).compileComponents();
  }));

  it('debería editar un dato', () => {
    const fixture = TestBed.createComponent(EditarComponent);

    const persona = {name: 'Bruce Lee', address: {city: 'California'}};
    mockBuscarService.setResponse(persona);

    fixture.detectChanges();
    // verificar que el servicio fue llamado
    expect(mockBuscarService.getByIdSpy).toHaveBeenCalledWith(1);

    // verficar que los datos fueron seteados al iniciar el component
    const editarComponent = fixture.debugElement.componentInstance;
    expect(editarComponent.editAddress.city).toBe('California');

    // verificar que el HTML renderiza como se espera
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').innerHTML).toBe('Bruce Lee');
  });
});
