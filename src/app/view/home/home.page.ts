import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { people, pin } from 'ionicons/icons'

addIcons({
  people: people,
  pin: pin
})

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon], 
})

export class HomePage {
  constructor(private router: Router) {}

  goToPessoaPage(){
    this.router.navigate(['pessoa']);
  }

  goToCepPage(){
    this.router.navigate(['cep']);
  }
}