import { NgModule } from '@angular/core';
import { HidetabDirective } from './hidetab/hidetab';
import { HideheaderDirective } from './hideheader/hideheader';
import { HideTabsDirective } from './hide-tabs/hide-tabs';
@NgModule({
	declarations: [HidetabDirective,
    HideheaderDirective,
    HideTabsDirective],
	imports: [],
	exports: [HidetabDirective,
    HideheaderDirective,
    HideTabsDirective]
})
export class DirectivesModule {}
