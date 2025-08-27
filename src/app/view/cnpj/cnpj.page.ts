import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { arrowBack } from 'ionicons/icons';
import { Router } from '@angular/router';

import { Invertexto } from 'src/app/service/invertexto';

addIcons({ arrowBack });

@Component({
  selector: 'app-cnpj',
  templateUrl: './cnpj.page.html',
  styleUrls: ['./cnpj.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonButton,
    IonIcon,
    IonInput,
    IonItem,
    IonLabel
  ]
})
export class CnpjPage implements OnInit {
  cnpj: string = '';
  dadosCnpj: any = null;
  errorMessage: string = '';

  constructor(
    private invertextoService: Invertexto,
    private router: Router
  ) {
      addIcons({arrowBack});}

  ngOnInit() {}

  buscarCnpj() {
    if (this.cnpj && this.cnpj.length === 14) {
      this.invertextoService.getByCnpj(this.cnpj).subscribe(
        (response) => {
          console.log(response);
          this.dadosCnpj = response;
          this.errorMessage = '';
        },
        (error) => {
          console.error('Erro na requisição', error);
          this.dadosCnpj = null;
          this.errorMessage = 'Erro ao buscar CNPJ, tente novamente';
        }
      );
    } else {
      this.dadosCnpj = null;
      this.errorMessage = 'Por favor, insira um CNPJ válido com 14 dígitos';
    }
  }

  goToHome() {
    this.router.navigate(['/home']);
  }
}