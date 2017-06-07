import { Directive, ElementRef, Renderer } from '@angular/core';

import { ToolTipComponent } from './tooltip.component';

import { ToolTipService } from './tooltip.service';

@Directive({
	selector: '[tooltip-btn]',
	host: {
		'(click)': "onClick($event)"	
	}
})

export class ToolTipDirective {

	constructor(
		private toolTipComponent: ToolTipComponent,
		private toolTipService: ToolTipService,
		private el: ElementRef,
		private renderer: Renderer) {}

	private currentToolTip = this.toolTipComponent.getToolTipComponent();

	onClick($event) {
		$event.stopPropagation();
		this.toolTipService.hideToolTips(this.currentToolTip);
		this.currentToolTip.active = !this.currentToolTip.active;
	}

}