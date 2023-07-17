import { Component ,OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { StagiaireService } from '../service/stagiaire.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent {
  stagiaireForm: FormGroup;

  constructor(private stagiaireService: StagiaireService, private toastr: ToastrService) { }

  ngOnInit() {
    this.stagiaireForm = new FormGroup({
      
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
    this.stagiaireService.addStagiaire(this.stagiaireForm.value).subscribe(response => {
      console.log(response);
      
      this.toastr.success('Stagiaire ajouté avec succès !');
      this.stagiaireForm.reset();
    }, error => {
      // Afficher une notification en cas d'erreur
      this.toastr.error('Une erreur s\'est produite lors de l\'ajout du stagiaire.');
      console.error(error);
    });
}
  }


