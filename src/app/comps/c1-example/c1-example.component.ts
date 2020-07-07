import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/service/helper.service';

@Component({
  selector: 'app-c1-example',
  templateUrl: './c1-example.component.html',
  styleUrls: ['./c1-example.component.css']
})
export class C1ExampleComponent implements OnInit {
  counter1:number
  counter2:number
 
  constructor(public srv:HelperService) { }
  obsRndDelay(){
    console.log('test');
    this.srv.getRandomNumberDelay().subscribe(rndNum => this.counter2 = rndNum)
  }
  obsRnd(){
    console.log('test');
    
     this.srv.getRandomNumber().subscribe(rndNum => this.counter1 = rndNum)
  }
  ngOnInit(): void {
    
  }

}
