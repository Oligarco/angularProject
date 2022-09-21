import { Injectable } from '@angular/core';
import { AngularFile, FirebaseListObservable } from 'angular/fire/compat';

@Injectable()
export class AppService{
  characters: FirebaseListObservable<any[]>;

  constructor(private af: AngularFile){}

  getCharacters(){
    this.characters = this.af.database.list('/characters') as FirebaseListObservable<any[]>;
    return this.characters;
  }

  getCharactersFilter(filter: string){
    this.characters = this.af.database.list('/characters',{
      query:{
        orderByChild:'name',
        equalTo: filter
      }
    }) as FirebaseListObservable<any[]>;
    return this.characters;
  }
}
