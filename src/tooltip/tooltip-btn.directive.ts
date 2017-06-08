/*
 * Author: Or-el Mousaffi
*/

//Import all core modules required
import { Directive, ElementRef, Renderer2 } from '@angular/core';

//Import components
import { ToolTipComponent } from './tooltip.component';

//Import services
import { ToolTipService } from './tooltip.service';

/*
 * Define the properties of the directive
 * selector: Specifies the attribute used for functionality
 * hosts: The hosts are a collection of event listeners tied to this directive
*/
@Directive({
	selector: '[tooltip-btn]',
	host: {
		'(click)': "onClick($event)"	
	}
})

export class ToolTipDirective {

	//Define the constructor
	constructor(
		private toolTipComponent: ToolTipComponent,
		private toolTipService: ToolTipService,
		private el: ElementRef,
		private renderer: Renderer2) {}

	//Define the click event listener
	onClick($event) {
		//Stop bubbling up the DOM
		$event.stopPropagation();

		//Hide all tooltips following by toggling the current tooltip
		this.toolTipService.hideToolTips(this.toolTipComponent);
		this.toolTipComponent.active = !this.toolTipComponent.active;
	}

}