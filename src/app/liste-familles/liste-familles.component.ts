import { Medicament } from './../model/medicament.model';
import { Famille } from './../model/famille.model';
import { Component, OnInit } from '@angular/core';
import { MedicamentService } from '../services/medicament.service';

@Component({
  selector: 'app-liste-familles',
  templateUrl: './liste-familles.component.html',
  styles: [
  ]
})
export class ListeFamillesComponent implements OnInit {
  familles!: Famille[];
  updatedFam:Famille= {"idFam":0,"nomFam":""};
  ajout:boolean=true;
 
  constructor(private medicamentService : MedicamentService) { }

  ngOnInit(): void {
    this.familles = this.medicamentService.listeFamilles();
  }

  familleUpdated(fam:Famille){
    this.medicamentService.ajouterFamille(fam);
  }

  //Charger Methode ... Pour API !!!!!!!! 

  updateFam(fam : Famille){
    this.updatedFam = fam;
    this.ajout=false;

  }

}
