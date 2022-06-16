import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './service/api.service';
import { CurrencyService } from './service/currency.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] 
})
export class AppComponent {
  title = 'crypto';
  selectedCurrency: string ="INR";
  constructor(private currencyService: CurrencyService){}
  sendCurrency(event: string){
    console.log(event);
    this.currencyService.setCurrency(event);

  }
}
