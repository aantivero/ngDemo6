import { Component, OnInit } from '@angular/core';
import {BuscarService, Person} from '../shared/buscar/buscar.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  query: string;
  searchResults: Array<Person>;

  constructor(private buscarService: BuscarService) { }

  ngOnInit() {
  }

  buscar(): void {
    this.buscarService.getAll().subscribe(
      (data: any) => { this.searchResults = data; },
      error => console.error(error)
    );
  }
}
