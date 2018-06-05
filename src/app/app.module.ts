import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BuscarComponent } from './buscar/buscar.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { EditarComponent } from './editar/editar.component';


const appRoutes: Routes = [
  {path: 'buscar', component: BuscarComponent},
  {path: 'editar/:id', component: EditarComponent},
  {path: '', redirectTo: '/buscar', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    BuscarComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
