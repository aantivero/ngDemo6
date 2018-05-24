import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BuscarComponent } from './buscar/buscar.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';


const appRoutes: Routes = [
  {path: 'buscar', component: BuscarComponent},
  {path: '', redirectTo: '/buscar', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    BuscarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
