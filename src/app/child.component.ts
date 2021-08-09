import {Component, AfterContentInit ,ContentChild } from '@angular/core';
@Component({
  selector:'child',
  template:'<h2 #h2>hi from child component</h2> <ng-content></ng-contentt>'
})
export class ChildComponent implements AfterContentInit 
{
  @ContentChild('h1') h;
  ngAfterContentInit(){
alert('ng thiscont',this.h);
  }
}