import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AngularFireModule } from 'angular/fire/compat';
import { AppComponent } from './app.component';
import {AppService} from './app.service';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdCardModule } from '@angular/';
import 'hammerjs';
import { DetailsComponent } from './detalles/details.component';


export const firebaseConfig = {
  apiKey: 'AIzaSyAxzlsp5LD707tSa9tiKapJZVPg8SBhYvU',
  authDomain: 'testfrontend-72f15.firebaseapp.com',
  databaseURL: 'https://testfrontend-72f15-default-rtdb.firebaseio.com',
  storageBucket: 'testfrontend-72f15.appspot.com',
  messagingSenderId: '130555631619',
  appId: '1:130555631619:web:38e107d41a9c4e3da01636',
  measurementId: 'G-YYFKB7ZS41'
};

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    MdCardModule,
    AngularFireModule.initializateApp(firebaseConfig)
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
