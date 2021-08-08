import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import{AddhocComponent} from './addhoc.component';
import {MessageComponent} from './message.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent,AddhocComponent  ],
  bootstrap:    [ AppComponent ],
  entryComponents:[MessageComponent]
})
export class AppModule { }
