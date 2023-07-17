import { Component  } from '@angular/core';
import { StagiaireService } from '../service/stagiaire.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  stagiaireId: number;
  constructor(private stagiaireService: StagiaireService) {}

  deleteStagiaire() {
    this.stagiaireService.deleteStagiaire(this.stagiaireId).subscribe(
      response => {
        console.log(response);
        // Handle the successful deletion
      },
      error => {
        console.error(error);
        // Handle the error
      }
    );
  }}
