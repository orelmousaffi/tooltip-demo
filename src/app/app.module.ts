import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToolTipComponent } from './tooltip.component';

import { ToolTipService } from './tooltip.service';

import { ToolTipDirective } from './tooltip-btn.directive';
 
@NgModule({
  declarations: [
    AppComponent,
    ToolTipComponent,
    ToolTipDirective
  ],
  imports: [
    BrowserModule
  ],
  exports: [
  	ToolTipDirective
  ],
  providers: [
  	ToolTipService
  ],
  bootstrap: [
  	AppComponent
  ]
})
export class AppModule { }
