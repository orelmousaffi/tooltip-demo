//Import all Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

//Import all Components
import { AppComponent } from './app.component';
import { ToolTipComponent } from '../tooltip/tooltip.component';

//Import all Services
import { ToolTipService } from '../tooltip/tooltip.service';

//Import all Directives
import { ToolTipDirective } from '../tooltip/tooltip-btn.directive';
import { ToolTipContentDirective } from '../tooltip/tooltip-content.directive';

@NgModule({
  declarations: [
    AppComponent,
    ToolTipComponent,
    ToolTipDirective,
    ToolTipContentDirective
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  exports: [
  	ToolTipDirective,
    ToolTipContentDirective
  ],
  providers: [
  	ToolTipService
  ],
  bootstrap: [
  	AppComponent
  ]
})
export class AppModule { }
