import { Component, OnInit } from '@angular/core';

import { Stagiaire } from '../models/stagiaire';
import { StagiaireService } from './../service/stagiaire.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  stagiaires: Stagiaire[];

  constructor(private stagiaireService: StagiaireService, ) { }

  ngOnInit() {
    this.getStagiaires();
  }

  getStagiaires() {
    this.stagiaireService.getStagiaires()
      .subscribe(data => {
        this.stagiaires = data;
        console.log(data)
      });
  }

}
