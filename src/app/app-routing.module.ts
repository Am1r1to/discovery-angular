import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Demo1Component } from './components/demo/demo1/demo1.component';
import { Demo2Component } from './components/demo/demo2/demo2.component';
import { Demo3Component } from './components/demo/demo3/demo3.component';
import { Demo4Component } from './components/demo/demo4/demo4.component';
import { Demo5Component } from './components/demo/demo5/demo5.component';
import { Demo6Component } from './components/demo/demo6/demo6.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  { path:'demo', children:[
    {path:'demo1', component: Demo1Component},
    {path:'demo2', component: Demo2Component},
    {path:'demo3', component: Demo3Component},
    {path:'demo4', component: Demo4Component},
    {path:'demo5', component: Demo5Component},
    {path:'demo6', component: Demo6Component},
  ]},
  


 // { path:"**", component:Demo4Component}
  { path:"**", redirectTo:"demo/demo4"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
