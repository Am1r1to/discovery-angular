import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html'
})
export class Demo1Component implements OnInit {
  public maVar1: String 
  public maVar2: Number
  public maVar3: Boolean 

  constructor() { 
    this.maVar1="Hello it's me"
    this.maVar2=42
    this.maVar3=false
  }

  ngOnInit(): void {
  }

}
