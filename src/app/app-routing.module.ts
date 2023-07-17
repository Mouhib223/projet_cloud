import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { StagiairesComponent } from './stagiaires/stagiaires.component';
import { TableComponent } from './table/table.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { ModificationComponent } from './modification/modification.component';
import { DeleteComponent } from './delete/delete.component';
import { HomeComponent } from './home/home.component';
import { ChercherComponent } from './chercher/chercher.component';

const routes: Routes = [
  {
    path:"" , component : HomeComponent

  },
  {
    path : "Chercher" , component : ChercherComponent
  },
  
  {

    path : "lister" , component : StagiairesComponent,
  },
  {
    path : "ajouter" , component : AjouterComponent,
    children: [
      { path: '', component: TableComponent }]

    },
    {
      path : "modifier" , component : ModificationComponent,
      children: [
        { path: '', component: TableComponent }]
  
      },
      {
        path : "supprimer" , component : DeleteComponent,
        children: [
          { path: '', component: TableComponent }]
    
        }
    
  
   
  
];

@NgModule({
  imports: [ CommonModule,
    BrowserModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
