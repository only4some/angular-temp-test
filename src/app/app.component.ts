import { Component, VERSION,ViewChild, ViewContainerRef} from '@angular/core';
import {MessageComponent} from './message.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
@ViewChild("ctn",{read:ViewContainerRef})ctn:ViewContainerRef;

  name = 'Angular ' + VERSION.major;
}

