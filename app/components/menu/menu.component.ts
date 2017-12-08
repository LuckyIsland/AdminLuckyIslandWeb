import { Component, Input } from '@angular/core';
import { TranslateService } from '../../translate';
import { UserAccount } from '../../models/account.model';
import { MenuItem } from '../../models/menu-item.model';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent {
	@Input() account: UserAccount; 
	// account1: UserAccount; 
	// MenuItems = ['agents', 'stakes', 'reports', 'settings', 'importEvents'];

	menuItems: MenuItem[] = [];
	
	constructor() {
		this.menuItems.push(new MenuItem(1, 'agents'));
		this.menuItems.push(new MenuItem(2, 'stakes'));
		this.menuItems.push(new MenuItem(3, 'reports'));
		let menuItem = new MenuItem(4, 'settings');
		menuItem.addChild(new MenuItem(5, 'importEvents'));
		menuItem.addChild(new MenuItem(6, 'addEvents'));
		this.menuItems.push(menuItem);
	}
}