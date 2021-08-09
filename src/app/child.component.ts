import {Component} from '@angular/core';
@Component({
  selector:'child',
  template:'<h2>hi from child component</h2> <ng-content></ng-contentt>'
})
export class ChildComponent{}