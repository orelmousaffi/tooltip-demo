/*
 * Author: Or-el Mousaffi
*/

//Import required components
import { ToolTipComponent } from './tooltip.component';

export class ToolTipService {

	//Define an empty list of tooltips
	allToolTips: ToolTipComponent[] = [];

	//Define a function used to add a new tooltip
	addToolTip(toolTip) {
		this.allToolTips.push(toolTip);
	}

	//The following function will hide all tooltips
	//If a particular tooltip is provided, its skipped to keep state
	hideToolTips(currentToolTip = null) {
		
		for (let next of this.allToolTips) {
			if (next !== currentToolTip) {
				next.active = false;
			}
		}	
	}
}