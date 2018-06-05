import {Component, OnDestroy, OnInit} from '@angular/core';
import {BuscarService, Person} from '../shared/buscar/buscar.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit, OnDestroy {
  query: string;
  searchResults: Array<Person>;
  sub: Subscription

  constructor(private buscarService: BuscarService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      if (params['term']) {
        this.query = decodeURIComponent(params['term']);
        this.buscar();
      }
    });
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  buscar(): void {
    this.buscarService.search(this.query).subscribe(
      (data: any) => { this.searchResults = data; },
      error => console.error(error)
    );
  }
}
