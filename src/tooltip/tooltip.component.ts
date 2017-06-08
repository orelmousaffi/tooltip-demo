/*
 * Author: Or-el Mousaffi
*/

//Import all requrired Core elements
import { Component, Input, HostListener, ElementRef } from '@angular/core';

//Import services
import { ToolTipService } from './tooltip.service';

/*
 * Define the properties of the component
 * selector: Specifies the HTML tag used for functionality
 * stylesUrls: Import the css files applied to the elements in this compnent
 * template: Defines the mark up rendered to create the component
*/
@Component({
	selector: 'tooltip',
	styleUrls: ['./tooltip.component.css'],
	template: `
		<div class="tooltip-container">
			<div 
				tooltip-popup 
				class="tooltip-content top" 
				*ngIf="active">
				{{ tooltipText }}
			</div>

			<button tooltip-btn class="btn btn-primary">{{ btnTitle }}</button>
		</div>
	`
})

export class ToolTipComponent {

	//Pass in date from the template to defined variables
	@Input() btnTitle: string;
	@Input() tooltipText: string;
	@Input() active: boolean = false;
	
	//Define the contructor
	constructor(private toolTipService: ToolTipService, private toolTipTag: ElementRef) {

		//For every tooltip created, add to the list managed by the service 
		toolTipService.addToolTip(this);
	}

	//Ensure that that if the 'ESC' button is pressed, all is closed
	@HostListener('document:keydown', ['$event']) onKeyDown($event) {
		if ($event.keyCode === 27) {
			this.toolTipService.hideToolTips();
		}
	}

	//Ensure that if the user clicks within the tooltip, nothing changes
	@HostListener('click', ['$event']) onClickInside($event) {
		$event.stopPropagation();
	}

	//Ensure that if the user clicks away form the tooltip, all are closed
	@HostListener('document:click', ['$event']) onClick($event) {
		this.toolTipService.hideToolTips();
	}
}