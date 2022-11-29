import { Famille } from './../model/famille.model';
import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-update-famille',
  templateUrl: './update-famille.component.html',
  styles: [
  ]
})
export class UpdateFamilleComponent implements OnInit {
  @Input()
famille! : Famille;

@Input()
ajout!:boolean;

 @Output()
familleUpdated = new EventEmitter<Famille>();


  constructor() { }

  ngOnInit(): void {
    console.log("ngOnInit du composant UpdateCategorie ",this.famille);

  }
  saveFamille(){
    this.familleUpdated.emit(this.famille);
  }

}
