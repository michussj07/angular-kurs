import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClickService {

  sumClicks = 0;

  constructor() { }

  addClicks() {
    this.sumClicks += 1;
    console.log('Suma: ');
    console.log(this.sumClicks);
  }
}
