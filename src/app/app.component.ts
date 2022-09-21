import { Component, OnInit} from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angular/fire/compat';
import {AppService} from './app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'testFrontEnd';
  characters: any[];
  names: ['Todos los personajes', 'Addam Marbrand','Henly (House Ashford)','Eddard Stark'];
  character = null;

  constructor(private service: AppService) {}

  ngOnInit() {
    this.service.getCharacters().suscribe(characters => this.characters = characters);
  }
  onSelect(event){
    let query = null;
    if (event.value == 'Todos los personajes')
      query = this.service.getCharacters();
    else
      query = this.service.getCharactersFilter(event.value)

    query.suscribe(characters => {
      this.characters = characters
    })
    this.character = null;
  }

  onClick(character){
    this.character = character;
  }
  closeDetails(){
    this.character = null;
  }

}
