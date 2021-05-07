import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo6',
  templateUrl: './demo6.component.html'
})
export class Demo6Component implements OnInit {
  public var1:number

  constructor() {
    this.var1=4
   }

  ngOnInit(): void {
  }

}
