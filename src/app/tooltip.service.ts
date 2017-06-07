import { ToolTipComponent } from './tooltip.component';

export class ToolTipService {
	allToolTips: ToolTipComponent[] = [];

	addToolTip(toolTip) {
		this.allToolTips.push(toolTip);
	}

	hideToolTips(currentToolTip = null) {
		
		for (let next of this.allToolTips) {
			if (next !== currentToolTip) {
				next.active = false;
			}
		}	
	}
}