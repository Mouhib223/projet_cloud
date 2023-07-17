import { Component } from '@angular/core';
import { StagiaireService } from '../service/stagiaire.service' 
import { Stagiaire } from '../models/stagiaire';
@Component({
  selector: 'app-chercher',
  templateUrl: './chercher.component.html',
  styleUrls: ['./chercher.component.css']
})
export class ChercherComponent {
  stagiaire: Stagiaire;

  constructor(private stagiaireService: StagiaireService) { }

  onSearch(id: string,event: Event): void {
    event.preventDefault(); 
    const numId = Number(id);
    console.log(id)
    this.stagiaireService.getStagiaire(numId).subscribe(stagiaire => {
      this.stagiaire = stagiaire;
      console.log(this.stagiaire)
    });
  }

}
