import { Component } from '@angular/core';
import { SharedComponent } from '../shared.component';
import { IMenu, IMenuChild } from './menu.d';

@Component({
  selector: 'tb-navigation',
  template: require('./navigation.component.html!text'),
  styles: [require('./navigation.component.css!text')]
})

export class NavigationComponent {

  currentMenu: IMenu;
  searchText: string = "";
  minWidth: number = 60;
  maxWidth: number = 250;
  navigationOpen: boolean = true;

  menus: IMenu[] = [{
    name: 'Latest News',
    glyphicon: 'info',
    route: ''
  },
  {
    name: 'Homepage',
    glyphicon: 'home',
    route: ''
  },
  {
    name: 'Forums',
    glyphicon: 'forum',
    route: ''
  },
  {
    name: 'TRiBot',
    glyphicon: 'file_download',
    route: ''
  },
  {
    name: 'Scripts',
    glyphicon: 'shopping_cart',
    route: ''
  },
  {
    name: 'User Panel',
    glyphicon: 'account_box',
    route: '',
    children: [{
      name: 'Home',
      route: ''
    },
    {
      name: 'My Scripts',
      route: ''
    },
    {
      name: 'Purchase Credits',
      route: ''
    },
    {
      name: 'Transfer Credits',
      route: ''
    },
    {
      name: 'Purchase VIP',
      route: ''
    },
    {
      name: 'Donate',
      route: ''
    }
    ]
  },
  {
    name: 'Scripter Panel',
    glyphicon: 'build',
    route: '',
    children: [{
      name: 'Home',
      route: ''
    },
    {
      name: 'My Scripts',
      route: ''
    },
    {
      name: 'Submit Script',
      route: ''
    },
    {
      name: 'Script Statistics',
      route: ''
    },
    {
      name: 'Request Payout',
      route: ''
    }
    ]
  },
  {
    name: 'Administrator Panel',
    glyphicon: 'supervisor_account',
    route: '',
    children: [{
      name: 'Home',
      route: ''
    },
    {
      name: 'User Manager',
      route: ''
    },
    {
      name: 'Script Manager',
      route: ''
    },
    {
      name: 'Payout Manager',
      route: ''
    }
    ]
  }];

  constructor(private shared: SharedComponent) {
    this.shared.navigationWidth = this.maxWidth;
  }

  toggleNavigation(menu?: IMenu) {
    if (menu != null && this.navigationOpen)
      return;
    if (this.shared.navigationWidth == this.maxWidth) {
      this.closeChildren();
      this.shared.navigationWidth = this.minWidth;
      this.navigationOpen = false;
      this.searchText = "";
    }
    else {
      this.shared.navigationWidth = this.maxWidth;
      setTimeout(() => {
        this.navigationOpen = true;
      }, 300);
    }
  }

  onMenuClick(menu: any) {
    if (menu.children != null) {
      if (menu.expanded) {
        menu.expanded = false;
      } else {
        this.closeChildren();
        menu.expanded = true;;
      }
    } else {
      this.deselectMenus();
      menu.selected = !menu.selected;
      this.currentMenu = menu;
    }
  }

  closeChildren() {
    this.menus.forEach(menu => {
      if (menu.children != null)
        menu.expanded = false;
    })
  }

  isMenuExpanded(menu: any) {
    return menu.expanded != null && menu.expanded;
  }

  deselectMenus() {
    this.menus.forEach(menu => {
      if (menu.children != null) {
        menu.children.forEach(child => {
          child.selected = false;
        });
      }
      menu.selected = false;
    })
  }

  isMenuSelected(menu: any) {
    return menu.selected != null && menu.selected;
  }
}