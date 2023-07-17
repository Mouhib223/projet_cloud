import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { StagiaireService } from '../service/stagiaire.service'
import { Stagiaire } from '../models/stagiaire';
@Component({
  selector: 'app-modification',
  templateUrl: './modification.component.html',
  styleUrls: ['./modification.component.css']
})
export class ModificationComponent implements OnInit{
  stagiaireForm: FormGroup;
  stagiaire: Stagiaire;

  constructor(private stagiaireService: StagiaireService) { }
  ngOnInit() {
    this.stagiaireForm = new FormGroup({
      'id': new FormControl(null),
      'nom': new FormControl(null),
      'prenom': new FormControl(null),
      'mail': new FormControl(null),
      'filiere': new FormControl(null),
      'niveau': new FormControl(null),
      'telephone': new FormControl(null),
      'ecole': new FormControl(null),
    });
  }

  onSubmit() {
    const updatedStagiaire: Stagiaire = {
      ...this.stagiaireForm.value, // Retain the existing ID
    };
    
    this.stagiaireService.updateStagiaire(updatedStagiaire).subscribe(response => {
      console.log(response);
      console.log("succés");

      // Handle the successful update
    }, error => {
      console.error(error);
 
    });
     
    
  }

}
