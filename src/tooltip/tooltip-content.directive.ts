/*
 * Author: Or-el Mousaffi
*/

//Import all requrired Core elements
import { Directive, ElementRef, Renderer2, HostListener, ChangeDetectorRef } from '@angular/core';

/*
 * Define the properties of the directive
 * selector: Specifies the attribute used for functionality
*/ 
@Directive({
	selector: '[tooltip-popup]'
})

export class ToolTipContentDirective {

	//Define the Constructor
	constructor(
		private el: ElementRef,
		private renderer: Renderer2,
		private cdf: ChangeDetectorRef) {
	}

	//Define the event listener for when the page is scrolled
	//This is used to detect if a tooltip must change position
	@HostListener('window:scroll', ['$event']) onScroll($event) {

		//By default set to top
		this.renderer.removeClass(this.el.nativeElement, 'bottom');

		//Find the tooltip's surroundings relative to window 
		let toolTipPos = this.el.nativeElement.getBoundingClientRect();

		//Set the tooltip to bottom if past the edge
		if (toolTipPos.top <= 0) {
			this.renderer.addClass(this.el.nativeElement, 'bottom');
		}
	}
}