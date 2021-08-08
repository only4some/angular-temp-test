import { Component, VERSION,ViewChild, ViewContainerRef,AfterViewInit,Injector,AfterContentInit,ComponentFactoryResolver} from '@angular/core';
import {MessageComponent} from './message.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements AfterViewInit,AfterContentInit  {
@ViewChild("ctn",{read:ViewContainerRef})ctn:ViewContainerRef;
comp:any;

constructor(private inject:Injector,private cfr:ComponentFactoryResolver){}

ngAfterContentInit(){

}
ngAfterViewInit(){
 let fact= this.cfr.resolveComponentFactory(MessageComponent);
 this.comp=fact.create(this.inject);
 //this.ctn.insert(comp.hostView);
}
loadComp=()=>{
  alert('im loadFactory');
  this.comp.instance.message="salud";
this.ctn.insert(this.comp.hostView);
}
  ngDestroy(){
    this.ctn.clear();
  }

name = 'Angular ' + VERSION.major;
}

