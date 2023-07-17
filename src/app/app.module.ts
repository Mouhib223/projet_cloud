import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TableComponent } from './table/table.component';
import { DeleteComponent } from './delete/delete.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { ModificationComponent } from './modification/modification.component';
import { StagiairesComponent } from './stagiaires/stagiaires.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ChercherComponent } from './chercher/chercher.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TableComponent,
    DeleteComponent,
    AjouterComponent,
    ModificationComponent,
    StagiairesComponent,
    HomeComponent,
    ChercherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    FormsModule

  ],
  providers: [{ provide: ToastrService, useValue: ToastrService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
