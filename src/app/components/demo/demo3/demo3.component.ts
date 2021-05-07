import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html'
})
export class Demo3Component implements OnInit {
public nbTotal: number
  constructor() { 
    this.nbTotal=0
  }

  ngOnInit(): void {
  }

  addOne(increment:number)
  {
  this.nbTotal+=increment
  }
  
  removeOne()
  {
    this.nbTotal-=1
  }
  
  resetNb()
  {
    this.nbTotal=0
  }

}
