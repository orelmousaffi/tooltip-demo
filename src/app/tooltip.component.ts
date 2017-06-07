import { Component, Input, HostListener, ElementRef } from '@angular/core';

import { ToolTipService } from './tooltip.service';

@Component({
	selector: 'tooltip',
	styleUrls: ['./tooltip.component.css'],
	template: `
		<div class="tooltip-container">
			<div class="tooltip-content" *ngIf="active">
				{{ tooltipText }}
			</div>

			<button tooltip-btn class="btn btn-primary">{{ btnTitle }}</button>
		</div>
	`
})

export class ToolTipComponent {
	@Input() btnTitle: string;
	@Input() tooltipText: string;
	@Input() active = false;

	constructor(private toolTipService: ToolTipService, private toolTipTag: ElementRef) {

		toolTipService.addToolTip(this);
	}

	getToolTipComponent() {
		return this;
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