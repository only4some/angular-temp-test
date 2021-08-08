import{Component,Input} from '@angular/core';
@Component({selector:'msg',
template:'<h2>hey i am dynami html:{{message}}</h2>'
})
export class MessageComponent{
  @Input("message") message;
}