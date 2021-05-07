import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo5',
  templateUrl: './demo5.component.html'
})
export class Demo5Component implements OnInit {

  public vartxt:string
  public varnb:number
  public vardate:Date


  constructor() {
    this.vartxt="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore itaque labore eveniet harum. Error, sequi."

    this.varnb=28.543

    this.vardate=new Date()
   }

  ngOnInit(): void {
  }

}
