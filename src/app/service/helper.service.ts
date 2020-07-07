import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }
  getRandomNumber():Observable<number>{
    let n = Math.floor(Math.random() * 66) + 1  
    return of(n);
  }

  getRandomNumberDelay():Observable<number>{
    let n = Math.floor(Math.random() * 66) + 1  
    return of(n).pipe(delay(1122));
  }
}
